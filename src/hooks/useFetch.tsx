import { useEffect, useState } from 'react';
import { getAllCharacters } from 'services/api-service';
import { AllCharactersResponse } from 'src/types/api-types';

export const useFetch = (
  value: string
): [AllCharactersResponse | null, boolean, boolean] => {
  const [state, setState] = useState<AllCharactersResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setState(null);
        const data = await getAllCharacters(value);
        setState(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [value]);

  return [state, isLoading, hasError];
};
