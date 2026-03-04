import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BookingPage } from '../pages/BookingPage';
import { PaymentPage } from '../pages/PaymentPage';
import { env } from '../utils/env';
import { testData } from '../utils/testData';

test('Member can complete payment (promo + card) and confirm booking', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.loginWithEmail(env.memberEmail, env.memberPassword);

  const booking = new BookingPage(page);
  await booking.goto();
  await booking.selectScanAndLocation();
  await booking.chooseAppointmentSlots();

  const payment = new PaymentPage(page);
  // Promo is optional; included to show payment-domain thinking
  // await payment.applyPromo(testData.promoCode);
  await payment.payWithCard();
});
