import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
const { userLogin } = require('./modules/security/login/login.spec') ;

test.describe('testinggggggg', ()=>{
  test.beforeAll(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await userLogin(page);
  })
  
  test('has title', async () => {
    console.log("yesssssssssssssssssssss")
  });
})



// import { test, expect } from '@playwright/test';
// const { chromium } = require('playwright');
// const { userLogin } = require('./modules/security/login/login.spec') ;

// // describe('Login Test', () => {
// //   let browser;
// //   let page;
// //   beforeAll(async () => {
// //     browser = await chromium.launch();
// //   });
//   test('has title', async ({ page }) => {
//     let browser;
// //   let page;
//     browser = await chromium.launch();

//     async function testLogin() {
//       // Perform login using the shared function
//       await userLogin(page);
    
//       // Continue with the test case
//       // ...
//     }
    
//     let temp = page
//     //await import('./modules/security/login/login.spec').then(({ userLogin }) => {
//       userLogin(temp);
//     //});
//     //userLogin();
//     //await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/cpg/setup/');

//     // Expect a title "to contain" a substring.
//     //await expect(page).toHaveTitle(/Playwright/);
//   });
// // })