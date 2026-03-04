Question 2
Part 1
Being privacy focused is integral to our culture and business model. Please devise an
integration test case that prevents members from accessing other’s medical data.
Hint: Begin Medical Questionnaire.
Part 2
Please devise HTTP requests from Part 1 to implement your test case. Submitting
written HTTP requisitions is fine, you do not need to submit a postman project.
Part 3
At Ezra, we have over 100 endpoints that transfer sensitive data. What is your thought
process around managing the security quality of these endpoints? What are the
tradeoffs and potential risks of your solution?

## Part 1 — Integration Test Case
The goal is to ensure that members cannot access another member’s medical questionnaire data.
Test scenario:

Member A logs into the member portal and begins the medical questionnaire.
Capture the encounterId generated for Member A.
Member B logs into a different account.
Member B attempts to access or submit questionnaire data using Member A’s encounterId.
The system should reject the request.

Expected Result: The API should return 403 Forbidden or 404 Not Found, preventing access to another member’s medical data.
This test ensures protection of sensitive medical information (PHI).


## Part 2 — HTTP Request
Example request used to submit the questionnaire:

curl -X POST \
https://stage-api.ezra.com/diagnostics/api/medicaldata/forms/mq/submissions/{submissionId}/{encounterId} \
-H "Authorization: Bearer <TOKEN>" \
-H "Content-Type: application/json"

Test scenario:
Member B attempts to submit questionnaire data using Member A’s submissionId and encounterId.
Response is returned as 403 or 401


## Part 3 — Managing Security for Sensitive Endpoints

To maintain security across many endpoints handling sensitive medical data:

1. Enforce authentication and authorization checks for every request.
2. Validate that the encounterId belongs to the authenticated user.
3. Implement automated security tests to detect unauthorized access.
4. Use HTTPS and encrypted storage for sensitive data.
5. Monitor logs for suspicious or repeated unauthorized access attempts.


