import { ApiResponse } from 'src/types/api-types';

export function getAllCharacters(searchValue: string) {
  return fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
    .then((response: Response) => response.json())
    .then((data: ApiResponse) => data);
}
