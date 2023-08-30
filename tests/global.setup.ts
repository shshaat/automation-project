
import { test as setup, expect } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';
const { userLogin } = require('./modules/security/login/login.spec') ;

setup('do login', async ({ page, context }) => {
  
    await userLogin(page);

    const storageState = require('../authentication.json');
    console.log(storageState.cookies)
    await context.addCookies(storageState.cookies);
    await context.clearPermissions();

  await page.context().storageState({ path: STORAGE_STATE });
});