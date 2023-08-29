import { Page } from '@playwright/test';
import { Config } from '../../../shared/environment-configuration';
import Login from './login.page';

const { test, expect } = require('@playwright/test');
const config = new Config();

async function userLogin(pg)  {
        const login = new Login(pg); 
        await pg.goto(config.baseUrl);
        await login.performLogin()
        console.log("pppppppppppp")

}

module.exports = {userLogin}

// test('login', async ({ page }) => {
//   const login = new Login(page); // Create an instance of Login with the actual page instance
//   //page.setDefaultTimeout(350000);
//   await login.goto();
//   await login.performLogin();  
  
//   //get logged in user
//   await expect(page).toHaveURL(/.*dashboard/);

//   //test.run(capturePatient);

// });