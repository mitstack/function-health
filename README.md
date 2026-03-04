# Ezra — Playwright Automation (POM)

## What this repo contains
### Question - 1:  Manual Test Cases https://github.com/mitstack/function-health/blob/main/Ezra_Member_Test_Cases.xlsx

### Question - 2: Assignment Answers https://github.com/mitstack/function-health/blob/main/Answer2.md

### Question - 3: Automated Playwright tests for:
1. Member sign-up (email/password flow)
2. Booking an appointment (scan + location + slots)
3. Payment flow (Stripe UI - shown as architecture; locators are placeholders)
4. Privacy/security API test: block cross-member access to medical questionnaire submission (BOLA/IDOR)

> Note: Locators and environment values are intentionally placeholders because staging UI and test credentials can differ.
> The goal is to demonstrate architecture, POM approach, and security-first test design.

## Trade - Offs
1. Placeholder locators were used for the assignment. In production, stable selectors such as data-testid would be preferred to reduce flakiness.
2. The privacy validation test is implemented at the API layer, since authorization checks are more reliable when tested directly through backend endpoints rather than UI flows.
3. Stripe payment fields use iframes, which may require additional handling in real automation environments.

## Why these tests were chosen
1. Sign-up/login: core entry gate; if broken, no member can do anything.
2. Booking: primary workflow that drives scheduling and downstream operations.
3. Payment: revenue-critical; high risk; must be reliable.
4. Privacy API test (BOLA/IDOR): highest severity because it protects PHI and enforces per-member isolation.

---

## Setup
### Prerequisites
- Node.js 18+ (recommended)
- npm

### Install
```bash
npm install
npx playwright install

### Run Test
npx playwright test

## Future Enhacement
integrate with CI/CD pipeline by introducing the github.yml and design the cadence and workflows.

