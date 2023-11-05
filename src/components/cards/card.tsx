import { Show } from 'src/types/api-types';

type CardProps = Pick<Show, 'image' | 'title' | 'category'>;

export const Card = ({ image, title, category }: CardProps) => {
  return (
    <li className="cards-item">
      <div className="card-container">
        <img className="card-image" src={image}></img>
        <div className="card-info">
          <p className="card-name">{title}</p>
          <p className="card-species">{category}</p>
        </div>
      </div>
    </li>
  );
};
