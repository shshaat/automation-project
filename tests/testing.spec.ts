//import './ex.spec'
import { test, expect } from '@playwright/test';
//import { STORAGE_STATE } from '../playwright.config';

test('has title', async ({page, context}) => {
  
    var storage = await context.storageState({path: "./authentication.json"});
    console.log(storage);

    console.log("yesssssssssssssssssssss")
    //await page.goto("http://backoffice-systemtest.andalusiagroup.net:8090");

    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/finance/general-ledger/setup/fiscal-year/');

    console.log(page.url());
    console.log(await page.title());

    await expect(page).toHaveURL(/.*general-ledger.*/g);

});

// test('ha', async ({page}) => {
//     console.log("yesssssssssssssssssssss2")
//     page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/cpg/setup/')
// });