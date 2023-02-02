import { searchTest as test } from './tests';

test.beforeEach(async ({ playwrightHomePage }) => {
  await playwrightHomePage.visit('/');
});

test('Testing search on playwright documentation page', async ({ playwrightHomePage, playwrightLanguagesPage }) => {
  await playwrightHomePage.navbar.openSearch();
  await playwrightHomePage.navbar.searchModal.findResult({ keyword: 'python', resultNumber: 0 });

  await playwrightLanguagesPage.languagePresent('python');
});
