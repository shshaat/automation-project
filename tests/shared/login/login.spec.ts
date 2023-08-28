import { Config } from '../configuration';
import Login from './login.page';
//import { Page } from '@playwright/test';

const { test, expect } = require('@playwright/test');
const config = new Config();

test('verify user', async ({ page }) => {
  const login = new Login(page); // Create an instance of Login with the actual page instance
  page.setDefaultTimeout(350000);
  await login.goto();
  
  // Fill username
  await login.loginUserNameField.click();
  await login.loginUserNameField.fill(config.loginUser);

  // Fill password
  await login.loginPasswordField.click();
  await login.loginPasswordField.fill(config.loginPassword);

  // Click login
  await login.loginsubmitBtn.click();
  
  //redirect to dashboard
  await page.waitForURL("http://backoffice-systemtest.andalusiagroup.net:8090/dashboard")

  //get logged in user
  const loggedInUser = await page.locator('#navbarCollapse .user-id label').textContent()  
  console.log("loggedInUser");

  //check for logged in user && not to be case sensitive 
  await expect(loggedInUser.toLowerCase()).toEqual(config.loginUser.toLowerCase())
});