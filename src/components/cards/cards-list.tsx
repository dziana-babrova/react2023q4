import { Show } from 'src/types/api-types';
import { Card } from './card';
import './cards-list.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'store-manager/store';
import { ShowsState } from 'store-manager/slices/shows-slice';

export const CardsList = () => {
  const { shows } = useSelector<RootState, ShowsState>((state) => state.shows);
  return (
    <ul className="cards">
      {shows?.result.map(
        (show: Pick<Show, 'image' | 'title' | 'status' | 'id'>) => {
          return <Card key={show.id} {...show}></Card>;
        }
      )}
    </ul>
  );
};
