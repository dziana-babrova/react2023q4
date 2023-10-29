import { Component, ReactNode } from 'react';
import { SearchBar } from 'components/search/search';
import { AllCharactersResponse } from 'src/types/api-types';
import { CardsList } from 'components/cards/cards-list';
import { SEARCH_TERM } from 'consts/consts';
import { getAllCharacters } from 'services/api-service';

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
    this.fetchCharacters(this.state.searchValue);
  }

  handleSearch = (value: string) => {
    this.setState({ data: null, searchValue: value });
    window.localStorage.setItem(SEARCH_TERM, value);
    this.fetchCharacters(value);
  };

  fetchCharacters = (searchValue: string) => {
    getAllCharacters(searchValue)
      .then((data) => {
        this.setState({ data });
      })
      .catch((e) => console.log(e));
  };

  render(): ReactNode {
    return (
      <>
        <div className="page-header">
          <h2 className="page-title">Characters</h2>
          <SearchBar
            searchValue={this.state.searchValue}
            handleSearchOnClick={this.handleSearch}
          ></SearchBar>
        </div>
        <CardsList response={this.state.data}></CardsList>
      </>
    );
  }
}
