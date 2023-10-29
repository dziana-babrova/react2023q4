import { Component, ReactNode } from 'react';
import { SearchBar } from 'components/search/search';
import { AllCharactersResponse } from 'src/types/api-types';
import { CardsList } from 'components/cards/cards-list';

type MainPageState = {
  data: AllCharactersResponse | null;
};
export class MainPage extends Component {
  state: MainPageState = { data: null };

  componentDidMount(): void {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }))
      .then(() => console.log(this.state.data));
  }

  render(): ReactNode {
    return (
      <>
        <div className="page-header">
          <h2 className="page-title">Characters</h2>
          <SearchBar></SearchBar>
        </div>
        <CardsList props={this.state.data}></CardsList>
      </>
    );
  }
}
