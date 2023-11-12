import { useEffect, useState } from 'react';
import { getShow } from 'services/api-service';
import { SingleShowApiResponse } from 'src/types/api-types';
import { useParams } from 'react-router-dom';

type useDetailedInfo = () => [SingleShowApiResponse | null, boolean, boolean];

export const useDetailedInfo: useDetailedInfo = () => {
  const { id } = useParams();
  const [state, setState] = useState<SingleShowApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setState(null);
        const data = await getShow(id || '');
        setState(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return [state, isLoading, hasError];
};
