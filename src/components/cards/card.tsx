import { Character } from 'src/types/api-types';

type CardProps = {
  props: Character;
};

export const Card = ({ props }: CardProps) => {
  return (
    <li className="cards-item">
      <div className="card-container">
        <img className="card-image" src={props.image}></img>
        <div className="card-info">
          <p className="card-name">{props.name}</p>
          <p className="card-species">{props.species}</p>
        </div>
      </div>
    </li>
  );
};
