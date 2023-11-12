import { Show } from 'src/types/api-types';
import { Link } from 'react-router-dom';

type CardProps = Pick<Show, 'image' | 'title' | 'status' | 'id'>;

export const Card = ({ image, title, status, id }: CardProps) => {
  return (
    <li className="cards-item">
      <Link to={`/details/${id}`} className="card-container">
        <img className="card-image" src={image} alt={title}></img>
        <div className="card-info">
          <p className="card-name">{title}</p>
          <p className="card-species">{status}</p>
        </div>
      </Link>
    </li>
  );
};
