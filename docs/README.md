# TSA Foundation — Project Docs

Planning & reference docs for the TSA Foundation donation campaign site.

| Doc | Purpose |
|-----|---------|
| [plan.md](plan.md) | The development plan — stack, features, data model, payment flow, build phases |
| [implementation.md](implementation.md) | **Handoff-ready build spec** — exact schema, routes, Razorpay service/controllers, modal flow, acceptance criteria |
| [references.md](references.md) | Official documentation links for every technology used |

## One-line summary

A single-page donation **campaign** for TSA Foundation — help **Bhavesh Telenge & Prasad Charikar
feed 200+ needy people**. Built on **Laravel 13 + Inertia React + Filament v5 + MySQL**, taking
payments via **Razorpay** (custom donation modal → Razorpay Checkout), storing every donation and
showing a live donor feed (name + amount) on the site.

> ⚠️ **Lesson learned:** the previous Laravel build was never committed to git and was wiped by a
> `git clean`. **Commit after every working phase from now on.**
