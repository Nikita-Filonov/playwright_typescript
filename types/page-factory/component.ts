import { Page } from '@playwright/test';

export type LocatorContext = { [key: string]: string | boolean | number };

export type ComponentProps = {
  nth?: number;
  page: Page;
  name?: string;
  locator: string;
};

export type LocatorProps = {
  nth?: number;
  last?: boolean;
  first?: boolean;
  locator?: string;
  scrollIntoView?: boolean;
} & LocatorContext;
