import { Component, ReactNode } from 'react';
import { AllCharactersResponse } from 'src/types/api-types';
import { Card } from './card';
import './cards-list.scss';
import { Loader } from 'components/loader/loader';

type CardsListProps = {
  response: AllCharactersResponse | null;
};

export class CardsList extends Component<CardsListProps> {
  constructor(props: CardsListProps) {
    super(props);
  }

  render(): ReactNode {
    return !this.props.response ? (
      <Loader></Loader>
    ) : (
      <ul className="cards">
        {this.props.response.results ? (
          this.props.response?.results.map((card) => {
            return <Card key={card.id} props={card}></Card>;
          })
        ) : (
          <div>No results found. Remove the search term or try later</div>
        )}
      </ul>
    );
  }
}
