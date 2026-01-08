import { test, expect } from '@playwright/test';

test('should display Google homepage title', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Verify the page title contains "Google" (case-insensitive)
  await expect(page).toHaveTitle(/google/i);
});
