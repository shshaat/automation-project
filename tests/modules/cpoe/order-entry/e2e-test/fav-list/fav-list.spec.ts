import { test, expect } from '@playwright/test';
import { Config } from "@tests/shared/environment-configuration";

test.beforeAll(async () => {
  console.log('Before tests');
});

test('Example Test', async ({page}) => {
  await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/finance/general-ledger/setup/fiscal-year/');

  await expect(page).toHaveURL(/.*general-ledger.*/g);
});

