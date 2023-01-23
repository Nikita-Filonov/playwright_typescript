import { Fixtures, Page } from '@playwright/test';
import { BaseFixture } from '../types/playwright';
import { mockStaticRecourses } from '../utils/mocks/static-mock';

export type ContextPagesFixture = {
  contextPage: Page;
};

export const contextPagesFixture: Fixtures<ContextPagesFixture, BaseFixture> = {
  contextPage: async ({ page }, use) => {
    await mockStaticRecourses(page);

    await use(page);
  }
};
