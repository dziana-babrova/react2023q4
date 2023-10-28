import { Component, ReactNode } from 'react';
import { SearchBar } from 'components/search/search';
import { AllCharactersResponse } from 'src/types/api-types';

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
        <SearchBar></SearchBar>
      </>
    );
  }
}
