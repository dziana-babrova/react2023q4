import { Component, ReactNode } from 'react';
import { AllCharactersResponse } from 'src/types/api-types';
import { Card } from './card';
import './cards-list.scss';

type CardsListProps = {
  props: AllCharactersResponse | null;
};

export class CardsList extends Component<CardsListProps> {
  constructor(props: CardsListProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <ul className="cards">
        {this.props.props?.results.map((card) => {
          return <Card key={card.id} props={card}></Card>;
        })}
      </ul>
    );
  }
}
