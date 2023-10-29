import { Component, ReactNode } from 'react';
import { SearchBar } from 'components/search/search';
import { AllCharactersResponse } from 'src/types/api-types';
import { CardsList } from 'components/cards/cards-list';
import { SEARCH_TERM } from 'consts/consts';

type MainPageState = {
  data: AllCharactersResponse | null;
  searchValue: string;
};
export class MainPage extends Component {
  state: MainPageState = {
    data: null,
    searchValue: window.localStorage.getItem(SEARCH_TERM) || '',
  };

  componentDidMount(): void {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${this.state.searchValue}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }))
      .catch((e) => {
        console.log(e);
      });
  }

  render(): ReactNode {
    return (
      <>
        <div className="page-header">
          <h2 className="page-title">Characters</h2>
          <SearchBar searchValue={this.state.searchValue}></SearchBar>
        </div>
        <CardsList response={this.state.data}></CardsList>
      </>
    );
  }
}
