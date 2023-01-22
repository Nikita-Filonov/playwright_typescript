import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';
import { Link } from '../../page-factory/link';
import { SearchModal } from '../modals/search-modal';

export class Navbar {
  readonly searchModal: SearchModal;

  private readonly apiLink: Link;
  private readonly docsLink: Link;
  private readonly searchButton: Button;

  constructor(public page: Page) {
    this.searchModal = new SearchModal(page);

    this.apiLink = new Link({ page, locator: "//a[text()='API']", name: 'API' });
    this.docsLink = new Link({ page, locator: "//a[text()='Docs']", name: 'Docs' });
    this.searchButton = new Button({ page, locator: 'button.DocSearch-Button', name: 'Search' });
  }

  async visitDocs(): Promise<void> {
    await this.docsLink.click();
  }

  async visitApi(): Promise<void> {
    await this.apiLink.click();
  }

  async openSearch(): Promise<void> {
    await this.searchButton.shouldBeVisible();

    await this.searchButton.hover();
    await this.searchButton.click();

    await this.searchModal.modalIsOpened();
  }
}
