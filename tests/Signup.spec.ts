import { test } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import { env } from '../utils/env';

test('Member can sign up (email/password flow)', async ({ page }) => {
  const signup = new SignupPage(page);
  await signup.goto();

  await signup.signUp('Ashna', 'Gulani', env.memberEmail, env.memberPassword);
});
