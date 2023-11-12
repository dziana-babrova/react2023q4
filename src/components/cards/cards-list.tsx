import { Show } from 'src/types/api-types';
import { Card } from './card';
import './cards-list.scss';
import { useContext } from 'react';
import { Context } from 'context/app-context';

export const CardsList = () => {
  const context = useContext(Context);
  return (
    <ul className="cards">
      {context?.data?.result.map(
        (show: Pick<Show, 'image' | 'title' | 'status' | 'id'>) => {
          return <Card key={show.id} {...show}></Card>;
        }
      )}
    </ul>
  );
};
