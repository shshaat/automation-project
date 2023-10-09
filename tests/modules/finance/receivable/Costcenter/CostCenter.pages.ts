import { Page, Locator,test } from '@playwright/test';

export class CostCenterPage {
  //
  readonly page: Page;
  readonly AddEditNewCostCenterCode: Locator;
  readonly AddEditNewCostCenterEname: Locator;
  readonly AddEditNewCostCenterArame: Locator;
  readonly filterCostCenterEnName: Locator;
  readonly successToaster: Locator;
  readonly addCostCenterBtn: Locator;
  readonly updateBtn:Locator;
  readonly editCostcenter:Locator;
  readonly deletebtn:Locator; 
  readonly yesBtn:Locator;

  constructor(page) {
    this.page = page;
    this.AddEditNewCostCenterCode = page.locator('//input[@name="Code"]');
    this.AddEditNewCostCenterEname = page.locator('//input[@name="EnName"]');
    this.AddEditNewCostCenterArame = page.locator('//input[@name="ArName"]');
    this.filterCostCenterEnName = page.locator('//input[@aria-label="English Name"]');
    this.successToaster = page.locator('div[class="k-notification-content"] p');
    this.addCostCenterBtn = page.getByRole('button', { name: ' New Cost Center' });
    this.editCostcenter= page.getByRole('button', { name: 'Edit' });
    this.updateBtn= page.getByRole('button', { name: ' Update' });
    this.deletebtn=page.getByRole('button', { name: 'Delete' });
    this.yesBtn=page.getByRole('button', { name: 'Yes' });
  }


  async gotoCostCenter(baseUrl: string) {
    await this.page.goto(baseUrl);
  }

  async addCostCenter(code, EnName,ArName) {
    await this.addCostCenterBtn.click();
    await this.AddEditNewCostCenterCode.click();
    await this.AddEditNewCostCenterCode.fill(code);
    await this.AddEditNewCostCenterEname.click();
    await this.AddEditNewCostCenterEname.fill(EnName);
    await this.AddEditNewCostCenterArame.click();
    await this.AddEditNewCostCenterArame.fill(ArName);
    await this.updateBtn.click();

}


async editCostCenter(code, EnName,ArName) {
  await this.editCostcenter.first().click();
  await this.AddEditNewCostCenterCode.click();
  await this.AddEditNewCostCenterCode.fill(code);
  await this.AddEditNewCostCenterEname.click();
  await this.AddEditNewCostCenterEname.fill(EnName);
  await this.AddEditNewCostCenterArame.click();
  await this.AddEditNewCostCenterArame.fill(ArName);
  await this.updateBtn.click();

}


async filterCCEnName(EnName) {
  await this.filterCostCenterEnName.click();
  await this.filterCostCenterEnName.fill(EnName);
  await this.filterCostCenterEnName.press('Enter');
}

async deleteCostcenter()
{
  await this.deletebtn.first().click();
  await this.yesBtn.click();

}

    
//page.waitForTimeout(3000);
await 




}  