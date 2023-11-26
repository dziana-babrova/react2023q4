import styles from './cards-list.module.scss';
import { Show } from '@/types/api-types';
import { Card } from './card';
import { useGetShowsQuery } from '@/store-manager/slices/api-slice';
import { useParams } from '@/hooks/useParams';

export const CardsList = () => {
  const [search, limit, page] = useParams();
  const { data } = useGetShowsQuery({ search, limit, page });
  return (
    <ul className={styles.cards}>
      {data?.result?.map(
        (show: Pick<Show, 'image' | 'title' | 'status' | 'id'>) => {
          return <Card key={show.id} {...show}></Card>;
        }
      )}
    </ul>
  );
};
