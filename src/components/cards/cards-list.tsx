import { ApiResponse, Show } from 'src/types/api-types';
import { Card } from './card';
import './cards-list.scss';

type CardsListProps = Pick<ApiResponse, 'result'>;

export const CardsList = ({ result }: CardsListProps) => {
  return (
    <ul className="cards">
      {result.map((show: Pick<Show, 'image' | 'title' | 'category' | 'id'>) => {
        return <Card key={show.id} {...show}></Card>;
      })}
    </ul>
  );
};
