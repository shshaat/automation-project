import { Page ,Locator} from '@playwright/test';
import { ConfigData } from '@tests/modules/finance/shared/functions/Data';
import { Config } from '@tests/shared/environment-configuration';
export class PageL{
//
readonly page:Page;
readonly CD:ConfigData;
readonly env:Config;



/// Login Locators
SystemUserName :string="//input[@id='userName']";
SystemUserPassword :string="//input[@id='password']";
SystemLogInBtn:string="button[type='submit']"
//-----------------------------------------------------------------------------

/// Cost Center Locators
AddEditNewCostCenterCode:string="//input[@name='Code']";
AddEditNewCostCenterEname:string="//input[@name='EnName']";
AddEditNewCostCenterArame:string="//input[@name='ArName']";
FilterCostCenterEnName:string="//input[@aria-label='English Name']";
toasterS: string = "div[class='k-notification-content'] p"





async goto() {
    await this.page.goto(this.env.baseUrl);
}






/*await page.goto(Lc.SystemURL);

  await page.waitForURL(Lc.SystemURL);
  page.getByText('Login');

  await page.locator(Lc.SystemUserName).click();
  await page.locator(Lc.SystemUserName).fill(Udata.getUserName ());
  await page.locator(Lc.SystemUserName).press('Tab');

  await page.locator(Lc.SystemUserPassword).fill(Udata.getUserPass());
  await page.locator(Lc.SystemUserPassword).press('Tab');

  //await page.getByRole('button', { name: 'Login' }).press('Enter');

  await page.locator(Lc.SystemLogInBtn).press('Enter');
  //await page.click("[id='next']");

  test.slow();

  await page.waitForURL(Lc.DashURL);
  
  page.getByText(' Welcome To DotCare!');
  page.getByText(Udata.getUserName(), { exact: true });
*/

};     