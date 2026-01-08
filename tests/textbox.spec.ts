import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';

test('User can submit text box form', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);

  await textBoxPage.open();
  await textBoxPage.fillForm(
    'Jigna Paragi',
    'jigna@test.com',
    'Ahmedabad, India'
  );
  await textBoxPage.submit();

  await expect(textBoxPage.outputName).toContainText('Jigna Paragi');
});
