import { test, expect, Page } from '@playwright/test';
import { capturePatient } from '@tests/shared/components/capture-patient/capture-patient.spec';

let page:Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await capturePatient(page)
});

test('Example Test', async () => {
  await page.locator('.OrdersTab').click();

});

