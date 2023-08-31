
import { test as setup, expect } from '@playwright/test';
//import { STORAGE_STATE } from '../playwright.config';
const { userLogin } = require('./modules/security/login/login.spec') ;

setup('do login', async ({ page, context }) => {
  
    await userLogin(page);
    
    await page.waitForURL("**/dashboard");

    //const storageState = require('../authentication.json');
 
    await page.waitForURL(/.*dashboard/);
    await expect(page).toHaveURL(/.*dashboard/);
  //await page.context().storageState({path:"./LoginAuthCQ.json"});
  

    await page.context().storageState({ path: './authentication.json'});


});

