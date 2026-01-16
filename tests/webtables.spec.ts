import { test } from '@playwright/test';
import { WebTablesPage } from '../pages/WebTablesPage';

test('User can add, search and delete record in Web Table', async ({ page }) => {
  const webTable = new WebTablesPage(page);

  await webTable.openWebTables();

  await webTable.addUser(
    'Jigna',
    'Paragi',
    'jigna@test.com',
    '30',
    '50000',
    'QA'
  );

  await webTable.searchUser('Jigna');
  await webTable.verifyUserVisible('Jigna');

  await webTable.deleteUserByName('Jigna');
});
