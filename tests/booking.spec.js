import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BookingPage } from '../pages/BookingPage';
import { env } from '../utils/env';

test('Member can book an appointment (select scan, location, slots)', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.loginWithEmail(env.memberEmail, env.memberPassword);

  const booking = new BookingPage(page);
  await booking.goto();
  await booking.selectScanAndLocation();
  await booking.chooseAppointmentSlots();
});
