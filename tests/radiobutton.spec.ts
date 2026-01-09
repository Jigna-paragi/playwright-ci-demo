import { test, expect } from '@playwright/test';
import { RadioButtonPage } from '../pages/RadioButtonPage';

test('User can select radio buttons', async ({ page }) => {
  const radioPage = new RadioButtonPage(page);

  await radioPage.open();

  await radioPage.selectYes();
  await expect(radioPage.resultText).toHaveText('Yes');

  await radioPage.selectImpressive();
  await expect(radioPage.resultText).toHaveText('Impressive');

  // Validate "No" radio is disabled
  await expect(radioPage.noRadio).toBeDisabled();
});
