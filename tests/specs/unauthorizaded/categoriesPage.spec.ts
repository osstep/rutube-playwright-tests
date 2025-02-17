import { test, expect } from '../../fixtures/fixtures';

test('Проверка лейаута', async ({ categoriesPage }) => {
  await categoriesPage.contentPageHasCorrectLayout();
});
