import { Page } from '@playwright/test';
import { Title } from '../page-factory/title';
import { capitalizeFirstLetter } from '../utils/generic';
import { BasePage } from './base-page';

export class PlaywrightLanguagesPage extends BasePage {
  private readonly languageTitle: Title;

  constructor(public page: Page) {
    super(page);

    this.languageTitle = new Title({ page, locator: 'h2#{language}', name: 'Language title' });
  }

  async languagePresent(language: string): Promise<void> {
    await this.languageTitle.shouldBeVisible({ language });
    await this.languageTitle.shouldHaveText(capitalizeFirstLetter(language), { language });
  }
}
