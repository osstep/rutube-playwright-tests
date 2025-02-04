import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async closeCookiesAlert() {
    await this.page.getByLabel('Уведомление о использовании').locator('button').click();
  }
}
