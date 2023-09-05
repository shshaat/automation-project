import { Locator, Page } from '@playwright/test';

export default class capturePatientPage{
    readonly page: Page;
    readonly activateSearchBar: Locator;
    readonly searchBarInput: Locator;
    readonly selectPatientByClick: Locator;
    readonly capturePatientBtn: Locator;
    readonly linkElement: any

    constructor(page: Page) {
        this.page = page;
        this.activateSearchBar = page.locator('#target div').nth(1);
        this.searchBarInput = page.locator('#navbarCollapse .searchBox input');
        this.selectPatientByClick = page.locator('.listitem .Age');
        this.capturePatientBtn = page.locator('form.navbar-nav button.capture-btn');
    }

    async navigateToPage(page, baseUrl){
        await page.goto(baseUrl);
    }

    async captureAction(page, SearchKeyWord){
        await this.activateSearchBar.click();
        await this.searchBarInput.fill(SearchKeyWord)
        await this.searchBarInput.press('Enter');
        await this.selectPatientByClick.click();
        await this.capturePatientBtn.click();  
    }
}

  
