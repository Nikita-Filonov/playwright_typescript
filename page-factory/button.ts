import test from '@playwright/test';
import { LocatorProps } from '../types/page-factory/component';
import { Component } from './component';

export class Button extends Component {
  get typeOf(): string {
    return 'button';
  }

  async hover(locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`Hovering the ${this.typeOf} with name "${this.componentName}"`, async () => {
      const locator = this.getLocator(locatorProps);
      await locator.hover();
    });
  }

  async doubleClick(locatorProps: LocatorProps = {}) {
    await test.step(`Double clicking ${this.typeOf} with name "${this.componentName}"`, async () => {
      const locator = this.getLocator(locatorProps);
      await locator.dblclick();
    });
  }
}
