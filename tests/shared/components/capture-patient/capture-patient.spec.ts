
const { test, expect } = require('@playwright/test');
import { Config } from "@tests/shared/environment-configuration";
import {PatientData} from "@tests/shared/test-data/patient-data"


export async function capturePatient(page){
  const config = new Config();
  const patientData = new PatientData()

  await page.goto(`${config.baseUrl}dashboard`);
  await expect(page).toHaveURL(/.*dashboard/);
  //find patient
  await page.locator('#target div').nth(1).click();
  await page.locator('#navbarCollapse .searchBox input').fill(`${patientData.SearchKeyWord}`);
  await page.locator('#navbarCollapse .searchBox input').press('Enter');
  //select patient
  await page.locator('.listitem .Age').click();
  //navigate to portal
  await page.locator('.start-nav').click()
  const partialSrc = '/nav/Portal.svg';
  const linkElement = await page.$(`a:has(img[src*="${partialSrc}"])`);
  await expect(linkElement).toBeTruthy();
  await linkElement.click()
  //capture patient
  await expect(page).toHaveURL(/.*physicianDesktop/);
  await page.waitForSelector('form.navbar-nav button.capture-btn');
  await page.locator('form.navbar-nav button.capture-btn').click();  
}
  
