import styles from './cards-list.module.scss';
import { ApiResponse, Show } from '@/types/api-types';
import { Card } from './card';

type CardsListProps = {
  shows: ApiResponse<Show[]>;
};

export const CardsList = ({ shows }: CardsListProps) => {
  return (
    <ul className={styles.cards}>
      {shows?.result?.map(
        (show: Pick<Show, 'image' | 'title' | 'status' | 'id'>) => {
          return <Card key={show.id} {...show}></Card>;
        }
      )}
    </ul>
  );
};
