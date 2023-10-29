import { Component, ReactNode } from 'react';
import { Character } from 'src/types/api-types';

type CardProps = {
  props: Character;
};

export class Card extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <li className="cards-item">
        <div className="card-container">
          <img className="card-image" src={this.props.props.image}></img>
          <div className="card-info">
            <p className="card-name">{this.props.props.name}</p>
            <p className="card-species">{this.props.props.species}</p>
          </div>
        </div>
      </li>
    );
  }
}
