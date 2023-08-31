
const { test, expect } = require('@playwright/test');

export const capturePatient = test('Capture Patient', async ({ page, context }) =>{
  /////////////////////// portal
  let storage = await context.storageState({path: "./authentication.json"});
  await page.goto('/finance/general-ledger/setup/fiscal-year/');

    await expect(page).toHaveURL(/.*general-ledger.*/g);
  await page.locator('#target div').nth(1).click();
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('Esraa Saeed');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  await page.locator('.col-md-6').first().click();
  await page.locator('.col-md-4').click();
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'portal Portal' }).click();
  await page.getByRole('button', { name: 'Capture Patient' }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL(/.*physicianDesktop/);
});
  
