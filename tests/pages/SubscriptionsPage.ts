import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SubscriptionsPage extends BasePage {
  private readonly contentPageLocator: Locator;

  constructor(page: Page) {
    super(page);

    this.contentPageLocator = this.page.locator('.application-module__content');
  }
  async open() {
    await this.page.goto('/my/subscriptions/');
  }
  async contentHasCorrectAriaSnapsot() {
    await this.checkAriaSnapshot(this.contentPageLocator, 'contentAriaSnapshot.yml');
  }
}
