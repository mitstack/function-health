# Ezra — Playwright Automation (POM)

## What this repo contains
Automated Playwright tests for:
1) Member sign-up (email/password flow)
2) Booking an appointment (scan + location + slots)
3) Payment flow (Stripe UI - shown as architecture; locators are placeholders)
4) Privacy/security API test: block cross-member access to medical questionnaire submission (BOLA/IDOR)

> Note: Locators and environment values are intentionally placeholders because staging UI and test credentials can differ.
> The goal is to demonstrate architecture, POM approach, and security-first test design.

---

## Setup
### Prerequisites
- Node.js 18+ (recommended)
- npm

### Install
```bash
npm install
npx playwright install

## Run Test
npx playwright test

---

## Future Enhacement
integrate with CI/CD pipeline by introducing the github.yml and design the cadence and workflows.

## Why these tests were chosen
Sign-up/login: core entry gate; if broken, no member can do anything.
Booking: primary workflow that drives scheduling and downstream operations.
Payment: revenue-critical; high risk; must be reliable.
Privacy API test (BOLA/IDOR): highest severity because it protects PHI and enforces per-member isolation.
