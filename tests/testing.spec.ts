import { test, expect } from '@playwright/test';

test('has title', async ({page, context}) => {
  
    var storage = await context.storageState({path: "./authentication.json"});
    console.log(storage);

    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/finance/general-ledger/setup/fiscal-year/');

    console.log(page.url());
    console.log(await page.title());

    await expect(page).toHaveURL(/.*general-ledger.*/g);

});