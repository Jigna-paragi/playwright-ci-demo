import { test } from '@playwright/test';
import { DynamicPropertiesPage } from '../pages/DynamicPropertiesPage';

test('User can handle dynamic properties using waits', async ({ page }) => {
  const dynamicPage = new DynamicPropertiesPage(page);

  await dynamicPage.openPage();

  await dynamicPage.waitForEnableButton();
  await dynamicPage.waitForVisibleButton();
  await dynamicPage.waitForColorChange();
});
