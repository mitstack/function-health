import { test, expect } from '@playwright/test';
import { MedicalDataApi } from '../api/MedicalDataApi';
import { env } from '../utils/env';

test('Privacy: Member B cannot submit questionnaire for Member A encounter (BOLA/IDOR)', async ({ request }) => {
  // These would be captured from your real session / DevTools when Member A starts questionnaire.
  // You can hardcode sample UUIDs for the assignment and call out in README that they are placeholders.
  const submissionIdA = '33f56878-590e-4603-b7f3-2ec76ecc9b02';
  const encounterIdA = 'e3dbf3fe-4280-49d1-b892-59b5e17024ef';

  const payload = {
    answers: [
      { questionId: 'smoking-history', answer: 'No' }
    ]
  };

  // If you don't have real tokens in take-home env, keep the structure and explain assumptions.
  expect(env.memberBToken, 'Set MEMBER_B_TOKEN to run this test').not.toBe('');

  const api = new MedicalDataApi(request);
  const res = await api.submitMedicalQuestionnaire({
    token: env.memberBToken,
    submissionId: submissionIdA,
    encounterId: encounterIdA,
    payload
  });

  await api.expectForbiddenOrNotFound(res);
});
