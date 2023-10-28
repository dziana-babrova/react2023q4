import { Component, ReactNode } from 'react';
import { SearchBar } from 'components/search/search';
export class MainPage extends Component {
  render(): ReactNode {
    return (
      <>
        <SearchBar></SearchBar>
      </>
    );
  }
}
