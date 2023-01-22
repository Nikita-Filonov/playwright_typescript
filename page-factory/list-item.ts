import { Component } from './component';

export class ListItem extends Component {
  get typeOf(): string {
    return 'list item';
  }
}
