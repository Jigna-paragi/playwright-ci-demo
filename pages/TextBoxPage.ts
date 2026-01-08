import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TextBoxPage extends BasePage {
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly outputName: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameInput = page.locator('#userName');
    this.emailInput = page.locator('#userEmail');
    this.currentAddressInput = page.locator('#currentAddress');
    this.submitButton = page.locator('#submit');
    this.outputName = page.locator('#name');
  }

  async open() {
    await this.navigate('https://demoqa.com/text-box');
  }

  async fillForm(name: string, email: string, address: string) {
    await this.fullNameInput.fill(name);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(address);
  }

  async submit() {
    await this.submitButton.click();
  }
}
