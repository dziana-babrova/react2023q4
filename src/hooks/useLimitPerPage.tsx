import { URL_SEARCH_PARAMS } from 'consts/consts';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getExistingLimitPerPage } from 'services/query-params-service';

type useLimitPerPageType = () => [string, (limit: string) => void];

export const useLimitPerPage: useLimitPerPageType = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(
    getExistingLimitPerPage(
      searchParams.get(URL_SEARCH_PARAMS.limit_per_page.name)
    )
  );

  useEffect(() => {
    setLimit(
      getExistingLimitPerPage(
        searchParams.get(URL_SEARCH_PARAMS.limit_per_page.name)
      )
    );
  }, [searchParams]);

  useEffect(() => {
    if (
      !Object.values(URL_SEARCH_PARAMS.limit_per_page.options).includes(
        String(searchParams.get(URL_SEARCH_PARAMS.limit_per_page.name))
      )
    ) {
      searchParams.delete(URL_SEARCH_PARAMS.limit_per_page.name);
      setSearchParams(searchParams);
      setLimit(URL_SEARCH_PARAMS.limit_per_page.default_value);
    }
  }, [searchParams, setSearchParams]);

  const setLimitPerPage = (limit: string) => {
    searchParams.set(URL_SEARCH_PARAMS.limit_per_page.name, limit);
    setSearchParams(searchParams);
  };

  return [limit, setLimitPerPage];
};
