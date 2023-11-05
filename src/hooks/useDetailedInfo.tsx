import { useEffect, useState } from 'react';
import { getShow } from 'services/api-service';
import { SingleShowApiResponse } from 'src/types/api-types';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { URL_SEARCH_PARAMS } from 'consts/consts';

type useDetailedInfo = (
  limit: string,
  searchQuery: string
) => [SingleShowApiResponse | null, boolean, boolean];

export const useDetailedInfo: useDetailedInfo = (limit, searchQuery) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const [state, setState] = useState<SingleShowApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setState(null);
        const data = await getShow(Number(id));
        setState(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    return function () {
      searchParams.set(URL_SEARCH_PARAMS.limit_per_page.name, limit);
      searchParams.set(URL_SEARCH_PARAMS.search_query.name, searchQuery);
      setSearchParams(searchParams);
    };
  });

  return [state, isLoading, hasError];
};
