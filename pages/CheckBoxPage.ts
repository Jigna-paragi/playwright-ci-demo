import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckBoxPage extends BasePage {
  readonly expandAllBtn: Locator;
  readonly homeCheckbox: Locator;
  readonly desktopCheckbox: Locator;
  readonly documentsCheckbox: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    super(page);

    this.expandAllBtn = page.locator('button[title="Expand all"]');
    this.homeCheckbox = page.locator('label[for="tree-node-home"]');
    this.desktopCheckbox = page.locator('label[for="tree-node-desktop"]');
    this.documentsCheckbox = page.locator('label[for="tree-node-documents"]');
    this.resultText = page.locator('#result');
  }

  async open() {
    await this.page.goto('https://demoqa.com/checkbox');
  }

  async expandAll() {
    await this.expandAllBtn.click();
  }

  async selectHome() {
    await this.homeCheckbox.click();
  }

  async selectDesktop() {
    await this.desktopCheckbox.click();
  }

  async selectDocuments() {
    await this.documentsCheckbox.click();
  }
}
