import { useEffect, useState } from 'react';
import { getAllCharacters } from 'services/api-service';
import { ApiResponse } from 'src/types/api-types';

export const useFetch = (
  value: string,
  limit: string
): [ApiResponse | null, boolean, boolean] => {
  const [state, setState] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setState(null);
        const data = await getAllCharacters(value, limit);
        console.log(data);
        setState(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [value, limit]);

  return [state, isLoading, hasError];
};
