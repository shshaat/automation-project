import { test, expect } from '@playwright/test';
import { capturePatient } from '@tests/shared/components/capture-patient/capture-patient.spec';

test.beforeAll(async ({ page, context }) => {
  await capturePatient(page)
});

test('Example Test', async ({page}) => {
  await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/finance/general-ledger/setup/fiscal-year/');

  await expect(page).toHaveURL(/.*general-ledger.*/g);
});

