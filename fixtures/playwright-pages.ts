import { Fixtures } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwright-home-page';
import { PlaywrightLanguagesPage } from '../pages/playwright-languages-page';
import { BaseFixture } from '../types/playwright';

export type PlaywrightPagesFixture = {
  playwrightHomePage: PlaywrightHomePage;
  playwrightLanguagesPage: PlaywrightLanguagesPage;
};

export const playwrightPagesFixture: Fixtures<PlaywrightPagesFixture, BaseFixture> = {
  playwrightHomePage: async ({ page }, use) => {
    const playwrightHomePage = new PlaywrightHomePage(page);

    await use(playwrightHomePage);
  },
  playwrightLanguagesPage: async ({ page }, use) => {
    const playwrightLanguagesPage = new PlaywrightLanguagesPage(page);

    await use(playwrightLanguagesPage);
  }
};
