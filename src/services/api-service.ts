import { AllCharactersResponse } from 'src/types/api-types';

export function getAllCharacters(searchValue: string) {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
    .then((response: Response) => response.json())
    .then((data: AllCharactersResponse) => data)
    .catch((e) => {
      console.log(e);
    });
}
