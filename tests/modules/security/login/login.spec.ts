import { Config } from '../../../shared/environment-configuration';
import Login from './login.page';
//import { capturePatient } from '../../shared/functions/capture-patient/capture-patient.spec';

const { test, expect } = require('@playwright/test');
const config = new Config();

test('verify user', async ({ page }) => {
  const login = new Login(page); // Create an instance of Login with the actual page instance
  page.setDefaultTimeout(350000);
  await login.goto();
  await login.performLogin();  
  
  //get logged in user
  await expect(page).toHaveURL(/.*dashboard/);

  //test.run(capturePatient);

});