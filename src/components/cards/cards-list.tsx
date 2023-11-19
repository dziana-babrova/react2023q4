import { Show } from 'src/types/api-types';
import { Card } from './card';
import './cards-list.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'store-manager/store';
import { selectSearch } from 'store-manager/slices/search-slice';
import { selectItems } from 'store-manager/slices/items-slice';
import { selectPage } from 'store-manager/slices/page-slice';
import { useGetShowsQuery } from 'store-manager/slices/api-slice';

export const CardsList = () => {
  const search = useSelector<RootState, string>(selectSearch);
  const limit = useSelector<RootState, string>(selectItems);
  const page = useSelector<RootState, string>(selectPage);
  const { data: shows } = useGetShowsQuery({ search, limit, page });

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
