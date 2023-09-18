import { test, expect, Page } from '@playwright/test';
import { capturePatient } from '@tests/shared/components/capture-patient/capture-patient.spec';

let page:Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await capturePatient(page)
});

test.describe('Dummy', () => {
  test('Example Test', async () => {
    await page.locator('.OrdersTab').click();
  });
  test('Finance', async () => {
    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/finance/cash-and-bank/operations/payment/new-expense');
  });
  test('CPG', async () => {
    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/cpg/setup/');
  });
  test('supply-chain', async () => {
    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/inventory-management/inventory-operations/internal-request/');
  });
  // 
  test('dummy-function', async ()=> {
    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/inventory-management/inventory-operations/internal-request/');
  });
});



