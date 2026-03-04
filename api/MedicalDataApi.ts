import { APIRequestContext, expect } from '@playwright/test';
import { env } from '../utils/env';

export class MedicalDataApi {
  constructor(private request: APIRequestContext) {}

  /**
   * Represents the endpoint you captured:
   * POST /diagnostics/api/medicaldata/forms/mq/submissions/{submissionId}/{encounterId}
   */
  async submitMedicalQuestionnaire(params: {
    token: string;
    submissionId: string;
    encounterId: string;
    payload: any;
  }) {
    const { token, submissionId, encounterId, payload } = params;

    return this.request.post(
      `${env.apiBaseUrl}/diagnostics/api/medicaldata/forms/mq/submissions/${submissionId}/${encounterId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        data: payload
      }
    );
  }

  async expectForbiddenOrNotFound(response: any) {
    expect([403, 404]).toContain(response.status());
  }
}
