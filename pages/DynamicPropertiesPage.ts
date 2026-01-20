import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicPropertiesPage extends BasePage {
  readonly enableAfterBtn: Locator;
  readonly visibleAfterBtn: Locator;
  readonly colorChangeBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.enableAfterBtn = page.locator('#enableAfter');
    this.visibleAfterBtn = page.locator('#visibleAfter');
    this.colorChangeBtn = page.locator('#colorChange');
  }

async openPage() {
  await this.navigate('https://demoqa.com/dynamic-properties');
}



  async waitForEnableButton() {
  await expect(this.enableAfterBtn).toBeEnabled({ timeout: 10000 });
}

 async waitForVisibleButton() {
  await expect(this.visibleAfterBtn).toBeVisible({ timeout: 10000 });
}

  async waitForColorChange() {
  await expect(this.colorChangeBtn).toHaveClass(/text-danger/, {
    timeout: 10000,
  });
} }
