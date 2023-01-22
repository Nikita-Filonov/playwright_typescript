import { test as base } from '@playwright/test';
import { PlaywrightPagesFixture, playwrightPagesFixture } from '../fixtures/playwright-pages';
import { combineFixtures } from '../utils/fixtures';

export const searchTest = base.extend<PlaywrightPagesFixture>(combineFixtures(playwrightPagesFixture));
