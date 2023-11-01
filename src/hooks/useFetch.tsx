import { useEffect, useState } from 'react';
import { getAllCharacters } from 'services/api-service';
import { AllCharactersResponse } from 'src/types/api-types';

export const useFetch = (value: string) => {
  const [state, setState] = useState<AllCharactersResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllCharacters(value);
        setState(data);
      } catch {}
    }

    fetchData();
  }, [value]);

  return [state];
};
