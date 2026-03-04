import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly googleSsoBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // TODO: Replace locators with real ones
    this.email = page.locator('[data-testid="email"]');
    this.password = page.locator('[data-testid="password"]');
    this.loginBtn = page.locator('[data-testid="login"]');
    this.googleSsoBtn = page.locator('[data-testid="google-sso"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async loginWithEmail(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
    await expect(this.page).toHaveURL(/dashboard|home|member/i);
  }

  async loginWithGoogleSSO() {
    // For take-home: show intent + architecture.
    // In real automation, you’d use:
    // - a test Google account
    // - or a mocked/stubbed IdP in staging
    await this.googleSsoBtn.click();
    await expect(this.page).toHaveURL(/dashboard|home|member/i);
  }
}
