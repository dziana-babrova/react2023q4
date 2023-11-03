import { ApiResponse, Product } from 'src/types/api-types';
import { Card } from './card';
import './cards-list.scss';

type CardsListProps = Pick<ApiResponse, 'products'>;

export const CardsList = ({ products }: CardsListProps) => {
  return (
    <ul className="cards">
      {products.map(
        (card: Pick<Product, 'thumbnail' | 'title' | 'category' | 'id'>) => {
          return <Card key={card.id} {...card}></Card>;
        }
      )}
    </ul>
  );
};
