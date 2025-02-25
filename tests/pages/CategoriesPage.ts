import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoriesPage extends BasePage {
  private readonly contentPageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentPageLocator = this.page.locator('.application-module__content');
  }

  async open() {
    await this.page.goto('/categories/');
  }
  async contentPageHasCorrectLayout() {
    await this.checkLayoutByScreenshot(this.contentPageLocator, 'categoriesPage.png');
  }
  async hideHeader() {
    await this.hideElement('header');
  }
}
