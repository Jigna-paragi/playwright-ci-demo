import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ButtonsPage extends BasePage {
  readonly doubleClickBtn: Locator;
  readonly rightClickBtn: Locator;
  readonly clickBtn: Locator;

  readonly doubleClickMsg: Locator;
  readonly rightClickMsg: Locator;
  readonly clickMsg: Locator;

  constructor(page: Page) {
    super(page);

    this.doubleClickBtn = page.locator('#doubleClickBtn');
    this.rightClickBtn = page.locator('#rightClickBtn');

    // ✅ Correct locator for dynamic ID
    this.clickBtn = page.getByRole('button', {
      name: 'Click Me',
      exact: true
    });

    this.doubleClickMsg = page.locator('#doubleClickMessage');
    this.rightClickMsg = page.locator('#rightClickMessage');
    this.clickMsg = page.locator('#dynamicClickMessage');
  }

  async open() {
    await this.navigate('https://demoqa.com/buttons');
  }

  async doubleClick() {
    await this.doubleClickBtn.dblclick();
  }

  async rightClick() {
    await this.rightClickBtn.click({ button: 'right' });
  }

  async singleClick() {
    await this.clickBtn.scrollIntoViewIfNeeded();
    await this.clickBtn.click();
  }
}
