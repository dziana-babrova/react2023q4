import { useEffect, useState } from 'react';
import { getAllCharacters } from 'services/api-service';
import { ApiResponse } from 'src/types/api-types';
import { Show } from 'src/types/api-types';

type useFetchType = (
  method: string,
  value: string,
  limit: string,
  page: string
) => [ApiResponse<Show[]> | null, boolean, boolean];

export const useFetch: useFetchType = (method, value, limit, page) => {
  const [state, setState] = useState<ApiResponse<Show[]> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setState(null);
        const data = await getAllCharacters<ApiResponse<Show[]>>(
          method,
          value,
          limit,
          (Number(page) - 1).toString()
        );
        setState(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [value, limit, method, page]);

  return [state, isLoading, hasError];
};
