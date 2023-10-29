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
          <p className="card-name">{this.props.props.name}</p>
          {/* <div className="card-info">
            <p className="card-status">
              {this.props.props.status} - {this.props.props.species}
            </p>
            <p>Last known location:</p>
            <p>{this.props.props.location.name}</p>
            <p>First seen in^</p>
            <p>{this.props.props.origin.name}</p>
          </div> */}
        </div>
      </li>
    );
  }
}
