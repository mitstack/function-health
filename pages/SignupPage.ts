import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly createAccountBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // TODO: Replace locators with real ones
    this.firstName = page.locator('[data-testid="first-name"]');
    this.lastName = page.locator('[data-testid="last-name"]');
    this.email = page.locator('[data-testid="email"]');
    this.password = page.locator('[data-testid="password"]');
    this.createAccountBtn = page.locator('[data-testid="create-account"]');
  }

  async goto() {
    await this.page.goto('/join');
  }

  async signUp(first: string, last: string, email: string, password: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.createAccountBtn.click();

    // High-level assertion placeholder
    await expect(this.page).toHaveURL(/dashboard|home|member/i);
  }
}
