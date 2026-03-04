import { Page, Locator, expect } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  readonly promoCodeInput: Locator;
  readonly applyPromoBtn: Locator;
  readonly payBtn: Locator;

  // Stripe elements often in iframes; here we just show structure
  readonly cardNumberFrame: Locator;
  readonly cardNumberInput: Locator;

  constructor(page: Page) {
    this.page = page;

    // TODO: Replace locators with real ones
    this.promoCodeInput = page.locator('[data-testid="promo-code"]');
    this.applyPromoBtn = page.locator('[data-testid="apply-promo"]');
    this.payBtn = page.locator('[data-testid="pay-now"]');

    this.cardNumberFrame = page.frameLocator('iframe[name*="__privateStripeFrame"]').locator('body');
    this.cardNumberInput = page.frameLocator('iframe[name*="__privateStripeFrame"]').locator('input[name="cardnumber"]');
  }

  async applyPromo(code: string) {
    await this.promoCodeInput.fill(code);
    await this.applyPromoBtn.click();
    // Expect discount indicator (placeholder)
    await expect(this.page.locator('[data-testid="promo-applied"]')).toBeVisible();
  }

  async payWithCard() {
    // In real test, switch into stripe frame and fill test card values.
    // Here: show approach.
    // await this.cardNumberInput.fill('4242424242424242');

    await this.payBtn.click();
    await expect(this.page).toHaveURL(/confirmation|dashboard|appointments/i);
  }
}
