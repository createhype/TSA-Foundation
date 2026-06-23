# Development Plan — TSA Foundation Donation Site

## 1. Goal

A single-page donation **campaign** for **TSA Foundation**:
> "Help Bhavesh Telenge & Prasad Charikar feed 200+ needy people."

Visitors choose/enter an amount → complete a **custom donation modal** → pay via **Razorpay**.
Every donation is stored in a database, and the site shows a **live donor feed** (name + amount).
**Not** a cancer campaign (the legacy/reference copy is being de-cancered).

## 2. Decisions (finalized)

| Area | Choice | Why |
|------|--------|-----|
| Backend | **Laravel 13** | Full backend + DB + admin in one framework |
| Frontend | **React via Laravel's official starter kit (Inertia v3)** | SPA feel, server-driven routing |
| Admin CMS | **Filament v5** (`^5.6`, the security-patched line) | No-code admin for campaign/packages/donations |
| Database | **MySQL** | Production relational DB (server already running on :3306) |
| Payments | **Razorpay** — Orders API + Web Checkout | Indian gateway; supports the custom-modal → Checkout flow |
| Dev tooling | **Laravel Boost**, **Pest**, **pnpm**, **Pint** | |

Refs: [references.md](references.md).

## 3. Repo layout

```
TSA-Foundation/
├─ src/ … (legacy TanStack site — reference only, on the master branch root)
├─ app/            ← NEW Laravel application (scaffolded fresh)
└─ docs/           ← this folder
```
The Laravel app lives in `app/`. The legacy `src/` site stays as visual reference until the port is
signed off, then it can be removed.

## 4. Architecture / payment flow

```
Visitor picks amount on landing page
   → opens "Complete Your Donation" modal (name, email, phone, platform-support %, toggles)
   → clicks "Pay Securely ₹Total"
      → POST /donations            (Laravel: create Donation row [status=created] + Razorpay Order)
      → Razorpay Checkout popup opens with the order_id
      → donor pays
         → handler callback → POST /donations/{id}/verify   (verify signature → mark paid)
         → webhook (server→server) → POST /razorpay/webhook  (verify signature → mark paid, authoritative)
   → on success: 80G receipt emailed, donor shown in the live feed
```
- **Amount is recomputed server-side** (never trust client prices).
- **`markPaid` is idempotent** so the handler + webhook don't double-count.
- Refs: [Razorpay Orders](https://razorpay.com/docs/api/orders/) ·
  [Standard Web Checkout](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/) ·
  [PHP server integration](https://razorpay.com/docs/payments/server-integration/php/) ·
  [Webhooks](https://razorpay.com/docs/webhooks/).

## 5. Feature requirements

### 5.1 Landing page (port of the legacy design, de-cancered)
Nav · Hero (slider + headline) · Donation card · Packages · Video · Know-the-NGO (founders =
**Bhavesh Telenge & Prasad Charikar**) · Story · Impact banner · Live donor feed · FAQ · Final CTA · Footer.
Componentized under `resources/js/components/landing/`.

### 5.2 "Complete Your Donation" modal (the agreed mockup)
- **Platform-support %** dropdown (0 / 5 / 10 / 15 %, default 10%) → adds a "Platform Support" line
- **Full Name\***, **Email\***, **Phone\***
- **Make my donation anonymous** toggle
- **Receive updates** toggle (default on)
- **Donation Summary**: Donation amount + Platform Support = **Total Payable**
- **Pay Securely ₹Total** button → Razorpay
- Trust badges (Verified Campaign · Tax Benefit · Secure Razorpay)
- TSA branding only — **no** "True Impact" / "Shivaanand" / cancer text.

### 5.3 Public donor feed + totals
- Recent donations: **display name (or "Anonymous") + amount + relative time**
- Live totals: **raised**, **donor count**, **progress vs goal**

### 5.4 Admin (Filament `/admin`)
Resources for **Campaign**, **Package**, **Donation** (donations read-mostly: view, filter by status,
toggle "featured" for the public feed). Filament's own login (no separate user auth).

### 5.5 80G receipt email
On confirmed payment, email the donor an 80G receipt (amount, date, payment id, NGO 80G/12A/PAN).
Idempotent; only when an email is present.

## 6. Data model (MySQL)

**campaigns** — `title, headline, subtitle, goal_amount, raised_baseline, donors_baseline, end_date, is_active`

**packages** — `name, slug, price, image_path, goal, donated, sort_order, is_active`

**donations** —
`campaign_id, donor_name, donor_email, donor_phone, amount, platform_support, total, items(json),
message, is_anonymous, wants_updates, status(created|paid|failed|refunded), razorpay_order_id,
razorpay_payment_id, razorpay_signature, paid_at, receipt_sent_at`

> Money stored as **integer rupees**; converted to **paise** (×100) only at the Razorpay boundary.

## 7. Build phases (checklist)

- [ ] **P1 Scaffold** — `laravel new app` (React + Pest + MySQL) → Boost → Filament `^5.6` → `razorpay/razorpay`
- [ ] **P2 Database** — MySQL `.env`, create DB, migrate
- [ ] **P3 Data model** — migrations / models / factories / seeders (real, de-cancered data)
- [ ] **P4 Razorpay backend** — `RazorpayService`, `DonationController` (store + verify), webhook, routes, CSRF exempt, `config/services.php`
- [ ] **P5 Filament** — Campaign / Package / Donation resources
- [ ] **P6 Frontend** — landing page (componentized) + donation modal + donor feed/totals + Checkout wiring
- [ ] **P7 Receipt + tests** — 80G mailable + Pest tests (render, order, verify, webhook, receipt)
- [ ] **P8 Commit** — commit to git after each phase

## 8. Setup prerequisites (need from you / interactive)

- **MySQL**: a database (e.g. `tsa_foundation`) + connection creds (host, port, user, password).
- **Interactive installers** (you run, like before): `laravel new`, `php artisan filament:install`,
  `php artisan make:filament-user`, and one-time `pnpm approve-builds`.
- **Razorpay**: `rzp_test_…` Key Id + Secret (Owner-generated; your dashboard role was *Manager*).
- **NGO details** for receipts: 80G reg, 12A reg, PAN, address.

## 9. Conventions

- **Commit after every working phase** (git). Never leave the build untracked.
- Amounts in **rupees** (int) in the DB; **paise** only when calling Razorpay.
- Follow official docs for each tool (see [references.md](references.md)); verify Razorpay
  signature methods against the SDK before writing payment code.
