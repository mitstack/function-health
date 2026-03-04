export const env = {
  memberBaseUrl: process.env.MEMBER_BASE_URL || 'https://myezra-staging.ezra.com',
  apiBaseUrl: process.env.API_BASE_URL || 'https://stage-api.ezra.com',

  // For “email/password” sign-up flows (if available in the portal)
  memberEmail: process.env.MEMBER_EMAIL || 'ashna+testA@example.com',
  memberPassword: process.env.MEMBER_PASSWORD || 'ChangeMe!123',

  memberBEmail: process.env.MEMBER_B_EMAIL || 'ashna+testB@example.com',
  memberBPassword: process.env.MEMBER_B_PASSWORD || 'ChangeMe!123',

  // If you have a way to obtain tokens in staging, store them here.
  memberAToken: process.env.MEMBER_A_TOKEN || '',
  memberBToken: process.env.MEMBER_B_TOKEN || ''
};
