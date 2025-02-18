import test from '@playwright/test';
import { ForCreatorsPage } from '../../pages/ForCreatorsPage';

ForCreatorsPage.testsParams.forEach(({ url, screenshotName, name }) => {
  test(`Проверка лейаута таба - ${name}`, async ({ page }) => {
    const forCreatorPage = new ForCreatorsPage(page);
    await forCreatorPage.open(url);
    await forCreatorPage.pageHasCorrectLayout(screenshotName);
  });
});
