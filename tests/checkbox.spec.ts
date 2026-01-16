import { test, expect } from '@playwright/test';
import { CheckBoxPage } from '../pages/CheckBoxPage';

test('User can select checkboxes and see results', async ({ page }) => {
  const checkBoxPage = new CheckBoxPage(page);

  await checkBoxPage.open();
  await checkBoxPage.expandAll();

  await checkBoxPage.selectHome();

  await expect(checkBoxPage.resultText).toContainText('home');
  await expect(checkBoxPage.resultText).toContainText('desktop');
  await expect(checkBoxPage.resultText).toContainText('documents');
});
