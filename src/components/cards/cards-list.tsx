import { AllCharactersResponse } from 'src/types/api-types';
import { Card } from './card';
import './cards-list.scss';
import { Loader } from 'components/loader/loader';

type CardsListProps = {
  response: AllCharactersResponse | null;
};

export const CardsList = ({ response }: CardsListProps) => {
  return !response ? (
    <Loader></Loader>
  ) : (
    <ul className="cards">
      {response.results ? (
        response?.results.map((card) => {
          return <Card key={card.id} props={card}></Card>;
        })
      ) : (
        <div>No results found. Remove the search term or try later</div>
      )}
    </ul>
  );
};
