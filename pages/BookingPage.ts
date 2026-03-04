import { Page, Locator, expect } from '@playwright/test';

export class BookingPage {
  readonly page: Page;
  readonly scanOption: Locator;
  readonly addOnOption: Locator;
  readonly locationDropdown: Locator;
  readonly calendarSlot: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // TODO: Replace locators with real ones
    this.scanOption = page.locator('[data-testid="scan-option"]');
    this.addOnOption = page.locator('[data-testid="add-on"]');
    this.locationDropdown = page.locator('[data-testid="location"]');
    this.calendarSlot = page.locator('[data-testid="calendar-slot"]');
    this.continueBtn = page.locator('[data-testid="continue"]');
  }

  async goto() {
    await this.page.goto('/book');
  }

  async selectScanAndLocation() {
    await this.scanOption.click();
    // optionally
    // await this.addOnOption.click();
    await this.locationDropdown.click();
    await this.locationDropdown.selectOption({ index: 1 });
    await this.continueBtn.click();
  }

  async chooseAppointmentSlots() {
    // Some locations require multiple slots; represent that here
    await this.calendarSlot.first().click();
    // For 2-3 required appointments, you’d click more slots
    // await this.calendarSlot.nth(1).click();
    await this.continueBtn.click();

    await expect(this.page).toHaveURL(/checkout|payment/i);
  }
}
