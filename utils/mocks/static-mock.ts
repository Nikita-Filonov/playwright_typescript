import { Page } from '@playwright/test';

export const mockStaticRecourses = async (page: Page): Promise<void> => {
  await page.route('**/*.{ico,png,jpg,mp3,woff,woff2}', (route) => route.abort());
};
