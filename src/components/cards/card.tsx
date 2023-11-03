import { Product } from 'src/types/api-types';

type CardProps = Pick<Product, 'thumbnail' | 'title' | 'category'>;

export const Card = ({ thumbnail, title, category }: CardProps) => {
  return (
    <li className="cards-item">
      <div className="card-container">
        <img className="card-image" src={thumbnail}></img>
        <div className="card-info">
          <p className="card-name">{title}</p>
          <p className="card-species">{category}</p>
        </div>
      </div>
    </li>
  );
};
