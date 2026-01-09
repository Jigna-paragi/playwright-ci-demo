import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class RadioButtonPage extends BasePage {
  readonly yesRadio: Locator;
  readonly impressiveRadio: Locator;
  readonly noRadio: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    super(page);

    this.yesRadio = page.locator('label[for="yesRadio"]');
    this.impressiveRadio = page.locator('label[for="impressiveRadio"]');
    this.noRadio = page.locator('#noRadio');

    this.resultText = page.locator('.text-success');
  }

  async open() {
    await this.navigate('https://demoqa.com/radio-button');
  }

  async selectYes() {
    await this.yesRadio.click();
  }

  async selectImpressive() {
    await this.impressiveRadio.click();
  }
}
