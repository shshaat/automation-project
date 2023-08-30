//import './ex.spec'
import { test, expect } from '@playwright/test';

test('has title', async ({page, context}) => {
  
    console.log("yesssssssssssssssssssss")
    page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/finance/general-ledger/setup/fiscal-year/')
});

test('ha', async ({page}) => {
    console.log("yesssssssssssssssssssss")
    page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/cpg/setup/')
});