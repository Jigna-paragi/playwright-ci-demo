import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WebTablesPage extends BasePage {
  readonly addButton: Locator;
  readonly searchBox: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly age: Locator; 
  readonly salary: Locator;
  readonly department: Locator;
  readonly submitBtn: Locator;
  readonly table: Locator;

  constructor(page: Page) {
    super(page);

    this.addButton = page.locator('#addNewRecordButton');
    this.searchBox = page.locator('#searchBox');
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.age = page.locator('#age');
    this.salary = page.locator('#salary');
    this.department = page.locator('#department');
    this.submitBtn = page.locator('#submit');
    this.table = page.locator('.rt-table');
  }

 async openWebTables() {
  await this.navigate('https://demoqa.com/webtables');
}


  async addUser(
    first: string,
    last: string,
    email: string,
    age: string,
    salary: string,
    dept: string
  ) {
    await this.addButton.click();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.email.fill(email);
    await this.age.fill(age);
    await this.salary.fill(salary);
    await this.department.fill(dept);
    await this.submitBtn.click();
  }

  async searchUser(text: string) {
    await this.searchBox.fill(text);
  }

  async verifyUserVisible(name: string) {
    await expect(this.table).toContainText(name);
  }

  async deleteUserByName(name: string) {
    const row = this.page.locator('.rt-tr-group', { hasText: name });
    await row.locator('[title="Delete"]').click();
  }
}
