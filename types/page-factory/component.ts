import { Page } from '@playwright/test';

export type LocatorContext = { [key: string]: string | boolean | number };

export type ComponentProps = {
  page: Page;
  name?: string;
  locator: string;
};

export type LocatorProps = { locator?: string } & LocatorContext;
