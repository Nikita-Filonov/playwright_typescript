import { Page } from '@playwright/test';
import { Input } from '../../page-factory/input';
import { ListItem } from '../../page-factory/list-item';
import { Title } from '../../page-factory/title';

type FindResult = {
  keyword: string;
  resultNumber: number;
};

export class SearchModal {
  private readonly emptyResultsTitle: Title;
  private readonly searchInput: Input;
  private readonly searchResult: ListItem;

  constructor(public page: Page) {
    this.emptyResultsTitle = new Title({ page, locator: 'p.DocSearch-Help', name: 'Empty results' });
    this.searchInput = new Input({ page, locator: '#docsearch-input', name: 'Search docs' });
    this.searchResult = new ListItem({ page, locator: '#docsearch-item-{resultNumber}', name: 'Result item' });
  }

  async modalIsOpened(): Promise<void> {
    await this.searchInput.shouldBeVisible();
    await this.emptyResultsTitle.shouldBeVisible();
  }

  async findResult({ keyword, resultNumber }: FindResult) {
    await this.searchInput.fill(keyword, { validateValue: true });
    await this.searchResult.click({ resultNumber });
  }
}
