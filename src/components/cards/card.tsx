import { Character } from 'src/types/api-types';

type CardProps = Pick<Character, 'image' | 'name' | 'species'>;

export const Card = ({ image, name, species }: CardProps) => {
  return (
    <li className="cards-item">
      <div className="card-container">
        <img className="card-image" src={image}></img>
        <div className="card-info">
          <p className="card-name">{name}</p>
          <p className="card-species">{species}</p>
        </div>
      </div>
    </li>
  );
};
