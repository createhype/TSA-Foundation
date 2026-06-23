# Reference Links

Official documentation for every technology in this project. Always prefer these over memory.

## Laravel (backend)
- Laravel 13.x docs — https://laravel.com/docs/13.x
- Starter kits (React) — https://laravel.com/docs/13.x/starter-kits
- Database / configuration — https://laravel.com/docs/13.x/database
- Migrations — https://laravel.com/docs/13.x/migrations
- Eloquent — https://laravel.com/docs/13.x/eloquent
- Mail — https://laravel.com/docs/13.x/mail
- Queues — https://laravel.com/docs/13.x/queues
- CSRF protection — https://laravel.com/docs/13.x/csrf
- Deployment / Laravel Cloud — https://cloud.laravel.com

## Inertia (React bridge)
- Inertia.js docs — https://inertiajs.com
- Pages & rendering — https://inertiajs.com/pages
- Forms / requests — https://inertiajs.com/forms

## Filament v5 (admin CMS)
- Filament docs — https://filamentphp.com/docs
- Panels / installation — https://filamentphp.com/docs (select the **5.x** version)
- Resources — https://filamentphp.com/docs (Resources section)
- ⚠️ Install `filament/filament:^5.6` — the `5.0.0` release has a security advisory (`PKSA-ndkp-2znf-9m7c`).

## Laravel Boost (dev tooling / MCP)
- Boost repo — https://github.com/laravel/boost
- Use `php artisan boost:install` (interactive) and the `search-docs` MCP tool for version-pinned docs.

## Razorpay (payments)
- Docs home — https://razorpay.com/docs
- Standard Web Checkout — https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/
- Build integration (incl. **verify payment signature**) — https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration/
- PHP server integration — https://razorpay.com/docs/payments/server-integration/php/
- Orders API — https://razorpay.com/docs/api/orders/
- Webhooks — https://razorpay.com/docs/webhooks/
- razorpay-php SDK (source) — https://github.com/razorpay/razorpay-php
  - Payment signature verification — https://github.com/razorpay/razorpay-php/blob/master/documents/paymentVerfication.md
  - Webhook signature verification — https://github.com/razorpay/razorpay-php/blob/master/documents/webhook.md
- Test cards / test mode — https://razorpay.com/docs/payments/payments/test-card-details/
- 80G context (Section 80G, Income Tax Act) — https://www.incometax.gov.in (donations deduction)

## MySQL (database)
- MySQL 8 reference — https://dev.mysql.com/doc/
- Laravel + MySQL config — https://laravel.com/docs/13.x/database#mysql-configuration

## Frontend tooling
- React 19 — https://react.dev
- Tailwind CSS v4 — https://tailwindcss.com/docs
- lucide-react (icons) — https://lucide.dev/icons
- sonner (toasts) — https://sonner.emilkowal.ski
- Vite — https://vite.dev

## Testing & quality
- Pest — https://pestphp.com/docs
- Laravel Pint — https://laravel.com/docs/13.x/pint

> Note: confirm the exact Razorpay PHP method names (`order->create`, `utility->verifyPaymentSignature`,
> `utility->verifyWebhookSignature`) against the SDK source above before writing the payment layer.

## Community tutorials (supplementary — verify against official)
- Laravel + Razorpay integration guide — https://www.vfixtechnology.com/laravel-razorpay-payment-integration-guide
  - ⚠️ Use only as a walkthrough. **Prefer the official Razorpay docs + SDK above** for the Orders flow,
    signature verification, and webhooks (security-critical; blogs often omit or outdate these).
