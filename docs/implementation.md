# Implementation Spec (handoff-ready)

A complete, unambiguous build spec for the TSA Foundation donation site so it can be implemented
end-to-end. **Follow the official docs in [references.md](references.md)** — especially for Razorpay
signature/webhook verification. Stack: **Laravel 13 + Inertia React starter kit + Filament v5 + MySQL + Razorpay**.

Money convention: store amounts as **integer rupees**; multiply by 100 to **paise** only when calling Razorpay.

---

## 0. Prerequisites
PHP 8.3+, Composer 2, Node 20+, pnpm, Laravel installer, a running **MySQL** server.

## 1. Scaffold (in repo root, creates `app/`)
```bash
laravel new app
```
Interactive answers: **React** starter kit · **Laravel's built-in** auth · **Pest** · **MySQL** · run npm/build = yes.
Then use **pnpm**: `cd app && rm -rf node_modules package-lock.json && pnpm install && pnpm approve-builds`
(edit the `dev` script in `composer.json` to use `pnpm run dev`).

## 2. Packages
```bash
cd app
composer require laravel/boost --dev && php artisan boost:install   # interactive
composer require filament/filament:"^5.6"                            # ^5.6 — 5.0.0 has a security advisory
php artisan filament:install --panels                                 # panel id: admin
php artisan make:filament-user                                        # create admin login
composer require razorpay/razorpay
```

## 3. Environment — `app/.env`
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tsa_foundation
DB_USERNAME=root
DB_PASSWORD=            # set to your MySQL password

RAZORPAY_KEY=rzp_test_T4g7w0JkCAe4oT
RAZORPAY_SECRET=        # TEST secret — set locally, DO NOT COMMIT (provided privately)
RAZORPAY_WEBHOOK_SECRET=

# 80G receipt org details
NGO_NAME="The Social Awakening (TSA Foundation)"
NGO_ADDRESS="Andheri (E), Mumbai, India"
NGO_EMAIL="hello@tsafoundations.com"
NGO_PAN=
NGO_80G_REG=
NGO_12A_REG=
```
Create the DB then migrate: `CREATE DATABASE tsa_foundation;` → `php artisan migrate`.
`config/services.php` → add `'razorpay' => ['key' => env('RAZORPAY_KEY'), 'secret' => env('RAZORPAY_SECRET'), 'webhook_secret' => env('RAZORPAY_WEBHOOK_SECRET')]`.
`config/donation.php` → `'org' => [name, address, email, pan, reg_80g, reg_12a]` from the `NGO_*` envs.

## 4. Database schema (migrations)

**campaigns**: `id, title, headline (nullable), subtitle (text nullable), goal_amount (uBigInt),
raised_baseline (uBigInt default 0), donors_baseline (uInt default 0), end_date (date nullable),
is_active (bool default true), timestamps`

**packages**: `id, name, slug (unique), price (uInt), image_path (nullable), goal (uInt default 0),
donated (uInt default 0), sort_order (uInt default 0), is_active (bool default true), timestamps`

**donations**: `id, campaign_id (FK nullable, nullOnDelete), donor_name (nullable),
donor_email (nullable), donor_phone (nullable), amount (uBigInt), platform_support (uBigInt default 0),
total (uBigInt), items (json nullable), message (text nullable), is_anonymous (bool default false),
wants_updates (bool default true), status (string default 'created'), razorpay_order_id (nullable, index),
razorpay_payment_id (nullable, index), razorpay_signature (nullable), paid_at (timestamp nullable),
receipt_sent_at (timestamp nullable), timestamps`

## 5. Models

**Campaign** — fillable all above; casts ints/bool/date. `donations(): HasMany`.
Accessors: `total_raised = raised_baseline + paid donations sum(amount)`;
`total_donors = donors_baseline + paid count`; `progress_percent = min(100, total_raised/goal*100)`;
`days_left = max(0, today→end_date diff)`.

**Package** — fillable; casts; `scopeActive`; `progress_percent = min(100, donated/goal*100)`;
`image_url = Storage::url(image_path)`; auto-slug from name on saving when blank.

**Donation** — fillable all; casts (`amount/platform_support/total`=int, `items`=array, bools, `paid_at/receipt_sent_at`=datetime).
`campaign(): BelongsTo`; `scopePaid` (status=paid); `scopeFeatured` (is_featured? — or use latest paid);
`display_name = is_anonymous || !donor_name ? 'Anonymous' : donor_name`.
- `markPaid($paymentId, $signature=null): bool` — idempotent: if already paid return false; else set
  status=paid, payment id, signature, paid_at; return true.
- `sendReceipt(): bool` — if `receipt_sent_at` set or no `donor_email`, return false; else
  `Mail::to(donor_email)->queue(new DonationReceiptMail($this))`, set `receipt_sent_at`.

## 6. Routes — `app/routes/web.php`
```php
Route::get('/', LandingController::class)->name('home');
Route::post('/donations', [DonationController::class, 'store'])->name('donations.store');
Route::post('/donations/{donation}/verify', [DonationController::class, 'verify'])->name('donations.verify');
Route::post('/razorpay/webhook', RazorpayWebhookController::class)->name('razorpay.webhook');
```
`bootstrap/app.php` → exempt the webhook from CSRF: `$middleware->validateCsrfTokens(except: ['razorpay/webhook'])`.

## 7. `app/Services/RazorpayService.php`
```php
use Razorpay\Api\Api;
use Razorpay\Api\Errors\SignatureVerificationError;

class RazorpayService {
    private Api $api;
    public function __construct() {
        $this->api = new Api((string) config('services.razorpay.key'), (string) config('services.razorpay.secret'));
    }
    public function createOrder(int $rupees, string $receipt, array $notes = []): array {
        return $this->api->order->create([
            'receipt' => $receipt, 'amount' => $rupees * 100, 'currency' => 'INR', 'notes' => $notes,
        ])->toArray();
    }
    public function verifyPaymentSignature(string $orderId, string $paymentId, string $signature): bool {
        try { $this->api->utility->verifyPaymentSignature([
            'razorpay_order_id' => $orderId, 'razorpay_payment_id' => $paymentId, 'razorpay_signature' => $signature,
        ]); return true; } catch (SignatureVerificationError) { return false; }
    }
    public function verifyWebhookSignature(string $body, string $sig, string $secret): bool {
        try { $this->api->utility->verifyWebhookSignature($body, $sig, $secret); return true; }
        catch (SignatureVerificationError) { return false; }
    }
}
```

## 8. Controllers

**LandingController** (`__invoke`): `Inertia::render('landing', [...])` with `campaign` (title, headline,
subtitle, goal, raised, donors, progress, daysLeft), `packages` (active, mapped: id,name,price,goal,donated,progress,image),
`updates` (paid donations latest 8: display_name, amount, message, time=paid_at->diffForHumans()), `razorpayKey`.

**DonationController@store**: validate donor_name/email/phone (nullable), `amount` (int min 1),
`platform_support` (int min 0), `is_anonymous`/`wants_updates` (bool), `items[]` (package_id exists, qty 1..999).
Recompute amount server-side from packages if `items` present (ignore client price). `total = amount + platform_support`.
Create Donation (status=created). `order = razorpay->createOrder(total, "donation_{id}", ['donation_id'=>id])`.
Save `razorpay_order_id`. Return JSON: `{key, order_id, amount(paise), currency:'INR', name, verify_url, prefill:{name,email,contact}}`.

**DonationController@verify**: validate `razorpay_payment_id/order_id/signature`. If order_id ≠ donation's → 422.
`if (!razorpay->verifyPaymentSignature(...)) { donation->update(['status'=>'failed']); return 422; }`
Else `markPaid(...)`, `sendReceipt()`, return `{status:'paid'}`.

**RazorpayWebhookController@__invoke**: `$body=$request->getContent()`, `$sig=$request->header('X-Razorpay-Signature')`,
`$secret=config('services.razorpay.webhook_secret')`. If empty/`!verifyWebhookSignature` → 400.
`$event=$request->json('event')`. On `payment.captured`/`order.paid`: read `$request->json('payload.payment.entity')`,
find donation by `razorpay_order_id`; capture donor email/contact from entity if missing; `save`; `markPaid`; `sendReceipt`. Return 200.

## 9. Filament (`/admin`)
Resources for **Campaign**, **Package**, **Donation** via `make:filament-resource X --generate`, then refine:
- Money columns/fields `->money('INR')` / prefix `₹`.
- Package: image `FileUpload->disk('public')->directory('packages')`; auto-slug.
- Donation: `status` Select (created/paid/failed/refunded) + badge colors; Razorpay fields + `items` **disabled** (read-only);
  table default sort by `created_at desc`, filter by status; show donor + amount + total + paid_at.
Run `php artisan storage:link` for images.

## 10. Frontend (Inertia React) — **light theme only**
- `resources/js/app.tsx`: createInertiaApp with **no global layout** (campaign page is standalone), keep Toaster/Tooltip.
- `resources/views/app.blade.php`: remove dark-mode `@class`/script; `<html>` background = `oklch(0.985 0.012 80)`.
- `resources/css/app.css`: port the **legacy warm theme** from `src/styles.css` using Tailwind v4 **`@theme inline`**
  (tokens: background/foreground/card/primary/primary-glow/secondary/muted/accent/success/border/input/ring/cream/ink,
  fonts Fraunces+Inter via Google Fonts @import, shadows, gradients, `glass-card`, animations: float/ping-soft/rise/pulse-soft).
- Page `resources/js/pages/landing.tsx` (thin) composing components in `resources/js/components/landing/`:
  `nav, hero (+donation-card), video-section, packages, know-ngo, story, impact-banner, updates, faq, final-cta, footer,
  section (helpers), format (inr/HERO_SLIDES/fallbacks), types, use-donate (Razorpay flow hook)`.
- **Content: de-cancered.** Founders = **Bhavesh Telenge & Prasad Charikar** (not Shivaanand). Hero headline
  "Help these two people feed 200+ needy people". No "cancer"/"chemo"/"Tata"/"True Impact" text. Port markup from
  legacy `src/routes/index.tsx`, replacing the hosted Razorpay button with the modal flow below.
- **CTA color** orange `#ED8936` (hover `#DD6B20`); donation-card pills: Tax Benefit = green (`bg-success`), Updates = purple `#6B46C1`.

### 10.1 "Complete Your Donation" modal (the agreed mockup)
Opens when the user clicks Donate (after choosing an amount). Two columns:
- **Left:** platform-support **% dropdown** (0/5/10/15, default 10 → `platform_support = round(amount * pct/100)`);
  **Full Name\***, **Email\***, **Phone\*** (validate: name required, valid email, 10-digit phone);
  "Make my donation anonymous" toggle; "Receive updates" toggle (default on); terms text;
  "Secure Payment Powered By Razorpay"; **"Pay Securely ₹{total}"** button.
- **Right:** campaign card (image + headline) + **Donation Summary** (Donation ₹amount + Platform Support ₹support = **Total ₹total**) + badges (Verified Campaign · Tax Benefit · Secure Razorpay).

### 10.2 Razorpay Checkout flow (client) — `use-donate` hook
1. Load `https://checkout.razorpay.com/v1/checkout.js`.
2. `POST /donations` with `{donor_name, donor_email, donor_phone, amount, platform_support, is_anonymous, wants_updates, items?}`
   (send CSRF via `X-XSRF-TOKEN` cookie). Receive `{key, order_id, amount, currency, name, verify_url, prefill}`.
3. `new window.Razorpay({ key, order_id, amount, currency, name, prefill, handler })`.open().
4. On `handler(resp)`: `POST verify_url` with `{razorpay_payment_id, razorpay_order_id, razorpay_signature}` →
   on success toast + `router.reload({ only: ['campaign','updates'] })` (updates the live donor feed + totals).
5. Guard: if no `razorpayKey`, toast "not configured".

### 10.3 Public donor feed + totals
`updates` prop renders **display_name + ₹amount + relative time** (Anonymous when flagged). Header shows
**raised**, **donor count**, **progress %** from the campaign props.

## 11. 80G receipt email
`make:mail DonationReceiptMail --markdown=emails.donation-receipt`. Subject "Your 80G Donation Receipt — {org name}".
Markdown body: greeting, table (Receipt No `DON-{id}`, Amount, Date, Payment ID), Section-80G eligibility line,
org name/address/80G/12A/PAN from `config('donation.org')`. Queued from `Donation::sendReceipt()`.

## 12. Seeders (real, de-cancered data)
- **Campaign**: title "Feeding 200+ Needy People", headline "Help these two people feed 200+ needy people",
  goal 1,000,000, raised_baseline 56,746, donors_baseline 144, end_date now+23d.
- **Packages**: Kabuli Chana 5KG ₹550, Grocery Kit ₹990, Rajma 5KG ₹550, Vegetables ₹550, Rice 20KG ₹700, Atta 20KG ₹800.
- **Donations**: a handful of paid, featured sample donors (name + amount + message) for the feed.

## 13. Tests (Pest)
- Landing renders (Inertia component `landing`, has campaign/packages/updates/razorpayKey).
- `POST /donations` creates pending donation + order (mock `RazorpayService`); amount recomputed from items server-side.
- verify: valid signature → paid + receipt queued; invalid → 422 + status failed (mock service; `Mail::fake`).
- webhook: valid signature → paid; invalid → 400.
- `markPaid` idempotent; `sendReceipt` once / not without email.

## 14. Acceptance criteria
- Visiting `/` shows the campaign with live totals + recent donors.
- Choosing an amount → Donate → modal → Pay Securely → Razorpay test payment succeeds → donation stored as `paid`,
  donor appears in the feed, totals update, 80G receipt logged/sent.
- `/admin` lists donations (filter by status) and lets staff edit campaign/packages.
- `vendor/bin/pint` clean; `php artisan test` green; `pnpm build` succeeds.
- **Commit to git after each phase.**

## 15. Razorpay method reference (verify against SDK)
- Create order: `$api->order->create(['receipt','amount'(paise),'currency'=>'INR','notes'])` — https://razorpay.com/docs/api/orders/
- Verify payment signature: `$api->utility->verifyPaymentSignature(['razorpay_order_id','razorpay_payment_id','razorpay_signature'])`
  (throws `SignatureVerificationError`) — https://github.com/razorpay/razorpay-php/blob/master/documents/paymentVerfication.md
- Verify webhook: `$api->utility->verifyWebhookSignature($body, $signatureHeader, $secret)` (header `X-Razorpay-Signature`)
  — https://razorpay.com/docs/webhooks/
- Client Checkout — https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/
