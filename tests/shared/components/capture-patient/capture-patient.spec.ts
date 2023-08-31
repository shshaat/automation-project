
const { test, expect } = require('@playwright/test');
import { Config } from "@tests/shared/environment-configuration";

export const capturePatient = test('Capture Patient', async ({ page, context }) =>{  
  const config = new Config();

  await page.goto(`${config.baseUrl}dashboard`);
  await expect(page).toHaveURL(/.*dashboard/);

  await page.locator('#target div').nth(1).click();
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('Esraa Saeed');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  await page.locator('.col-md-6').first().click();
  await page.locator('.col-md-4').click();
  //navigate to portal
  await page.locator('.start-nav').click()
    const partialSrc = '/nav/Portal.svg'; // Partial match of the image src
  //const linkSelector = `a:has(img[src*="${partialSrc}"])`;

  const linkElement = await page.$(`a:has(img[src*="${partialSrc}"])`);
  await expect(linkElement).toBeTruthy();
  await linkElement.click()
  
  // await page.getByRole('link').nth(1).click();
  // await page.getByRole('link', { name: 'portal Portal' }).click();
  await expect(page).toHaveURL(/.*physicianDesktop/);
  await page.getByRole('button', { name: 'Capture Patient' }).click();
  // Expect a title "to contain" a substring.
});
  
