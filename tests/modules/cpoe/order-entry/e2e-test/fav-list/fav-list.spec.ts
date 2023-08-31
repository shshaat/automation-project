import { test, expect } from '@playwright/test';

test('has title', async ({page, context}) => {
  
    var storage = await context.storageState({path: "./authentication.json"});
    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/finance/general-ledger/setup/fiscal-year/');

    await expect(page).toHaveURL(/.*general-ledger.*/g);

});