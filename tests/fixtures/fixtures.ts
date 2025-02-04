import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

// Declare the types of your fixtures.
type MyFixtures = {
  mainPage: MainPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeCookiesAlert();

    // Use the fixture value in the test.
    await use(mainPage);
  },
});
export { expect } from '@playwright/test';
