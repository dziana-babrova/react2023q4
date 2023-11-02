import { AllCharactersResponse, Character } from 'src/types/api-types';
import { Card } from './card';
import './cards-list.scss';

type CardsListProps = Pick<AllCharactersResponse, 'results'>;

export const CardsList = ({ results }: CardsListProps) => {
  return (
    <ul className="cards">
      {results.map(
        (card: Pick<Character, 'image' | 'name' | 'species' | 'id'>) => {
          return <Card key={card.id} {...card}></Card>;
        }
      )}
    </ul>
  );
};
