
import { Locator, Page, expect } from '@playwright/test';
import { Config } from "@tests/shared/environment-configuration";
import {PatientData} from "@tests/shared/test-data/patient-data"
const config = new Config();
const patientData = new PatientData()

export default class capturePatientPage{
    readonly page: Page;
    readonly activateSearchBar: Locator;
    readonly searchBarInput: Locator;
    readonly selectPatientByClick: Locator;
    //readonly startNavigation: Locator;
    //readonly navImageSrc: string;
    readonly capturePatientBtn: Locator;
    readonly linkElement: any

    constructor(page: Page) {
        this.page = page;
        this.activateSearchBar = page.locator('#target div').nth(1);
        this.searchBarInput = page.locator('#navbarCollapse .searchBox input');
        this.selectPatientByClick = page.locator('.listitem .Age');
        //this.startNavigation = page.locator('.start-nav');
        //this.navImageSrc = '/nav/Portal.svg';
        this.capturePatientBtn = page.locator('form.navbar-nav button.capture-btn');
    }

    async navigateToPage(page){
        await page.goto(`${config.baseUrl}physicianDesktop`);
        await expect(page).toHaveURL(/.*physicianDesktop/);
    }

    async captureAction(page){
        await this.activateSearchBar.click();
        await this.searchBarInput.fill(`${patientData.SearchKeyWord}`)
        await this.searchBarInput.press('Enter');
        await this.selectPatientByClick.click();
        //await this.startNavigation.click();
        // const linkElement = await page.$(`a:has(img[src*="${this.navImageSrc}"])`)
        // await expect(linkElement).toBeTruthy();
        // await linkElement.click()
        await this.capturePatientBtn.click();  
        //await page.goto

    }
}

  
