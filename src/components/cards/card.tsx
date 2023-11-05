import { Show } from 'src/types/api-types';

type CardProps = Pick<Show, 'image' | 'title' | 'status'>;

export const Card = ({ image, title, status }: CardProps) => {
  return (
    <li className="cards-item">
      <div className="card-container">
        <img className="card-image" src={image}></img>
        <div className="card-info">
          <p className="card-name">{title}</p>
          <p className="card-species">{status}</p>
        </div>
      </div>
    </li>
  );
};
