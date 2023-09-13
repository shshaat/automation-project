import { Locator, Page } from '@playwright/test';
//import { Config } from '@tests/shared/environment-configuration';

//const config = new Config();

export default class Login {
  //readonly url = config.baseUrl;
  readonly page: Page;
  readonly loginUserNameField: Locator;
  readonly loginPasswordField: Locator;
  readonly loginsubmitBtn: Locator;

  constructor(page) {
    this.page = page;
    this.loginUserNameField = page.locator('#userName');
    this.loginPasswordField = page.locator('#password');
    this.loginsubmitBtn = page.locator('.submit-btn');
  }

  async goto(url:string) {
    await this.page.goto(url);
  }

  async performLogin(user,pass){
    // Fill username
    await this.loginUserNameField.click();
    await this.loginUserNameField.fill(user);
    // Fill password
    await this.loginPasswordField.click();
    await this.loginPasswordField.fill(pass);

    // Click login
    await this.loginsubmitBtn.click();
  }

}