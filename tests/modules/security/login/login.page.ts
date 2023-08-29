import { Locator, Page } from '@playwright/test';
import { Config } from '../../../shared/environment-configuration';

const config = new Config();

export default class Login {
  readonly url = config.baseUrl;
  readonly page: Page;
  readonly loginUserNameField: Locator;
  readonly loginPasswordField: Locator;
  readonly loginsubmitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginUserNameField = page.locator('#userName');
    this.loginPasswordField = page.locator('#password');
    this.loginsubmitBtn = page.locator('.submit-btn');
  }

  async goto() {
    await this.page.goto(this.url);    
  }

  async performLogin(){
    // Fill username
    await this.loginUserNameField.click();
    await this.loginUserNameField.fill(config.loginUser);

    // Fill password
    await this.loginPasswordField.click();
    await this.loginPasswordField.fill(config.loginPassword);

    // Click login
    await this.loginsubmitBtn.click();
  }

}