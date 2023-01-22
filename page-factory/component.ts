import { expect, Locator, Page, test } from '@playwright/test';
import { ComponentProps, LocatorProps } from '../types/page-factory/component';
import { capitalizeFirstLetter } from '../utils/generic';
import { locatorTemplateFormat } from '../utils/page-factory';

export abstract class Component {
  page: Page;
  locator: string;
  private nth: number | undefined;
  private name: string | undefined;

  constructor({ page, locator, name, nth }: ComponentProps) {
    this.page = page;
    this.locator = locator;
    this.name = name;
    this.nth = nth;
  }

  async getLocator(props: LocatorProps = {}): Promise<Locator> {
    const { first, last, locator, nth, scrollIntoView, ...context } = props;
    const withTemplate = locatorTemplateFormat(locator || this.locator, context);

    let element = this.page.locator(withTemplate);

    if (first) {
      element = element.first();
    }

    if (last) {
      element = element.last();
    }

    if (nth !== undefined || this.nth !== undefined) {
      element = element.nth(nth || this.nth || 0);
    }

    if (scrollIntoView) {
      await element.scrollIntoViewIfNeeded();
    }

    return element;
  }

  get typeOf(): string {
    return 'component';
  }

  get typeOfUpper(): string {
    return capitalizeFirstLetter(this.typeOf);
  }

  get componentName(): string {
    if (!this.name) {
      throw Error('Provide "name" property to use "componentName"');
    }

    return this.name;
  }

  private getErrorMessage(action: string): string {
    return `The ${this.typeOf} with name "${this.componentName}" and locator ${this.locator} ${action}`;
  }

  async shouldBeVisible(locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`${this.typeOfUpper} "${this.componentName}" should be visible on the page`, async () => {
      const locator = await this.getLocator(locatorProps);
      await expect(locator, { message: this.getErrorMessage('is not visible') }).toBeVisible();
    });
  }

  async shouldHaveText(text: string, locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`${this.typeOfUpper} "${this.componentName}" should have text "${text}"`, async () => {
      const locator = await this.getLocator(locatorProps);
      await expect(locator, { message: this.getErrorMessage(`does not have text "${text}"`) }).toContainText(text);
    });
  }

  async click(locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`Clicking the ${this.typeOf} with name "${this.componentName}"`, async () => {
      const locator = await this.getLocator(locatorProps);
      await locator.click();
    });
  }
}
