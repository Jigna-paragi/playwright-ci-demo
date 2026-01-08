import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../pages/ButtonsPage';

test('User can perform button actions', async ({ page }) => {
  const buttonsPage = new ButtonsPage(page);

  await buttonsPage.open();

  await buttonsPage.doubleClick();
  await expect(buttonsPage.doubleClickMsg)
    .toHaveText('You have done a double click');

  await buttonsPage.rightClick();
  await expect(buttonsPage.rightClickMsg)
    .toHaveText('You have done a right click');

  await buttonsPage.singleClick();
  await expect(buttonsPage.clickMsg)
    .toHaveText('You have done a dynamic click');
});
