import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  async open() {
    this.page.goto('https://rutube.ru/');
  }
}
