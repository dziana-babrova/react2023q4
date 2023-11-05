import { SEARCH_TERM, URL_SEARCH_PARAMS } from 'consts/consts';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

type useSearchQueryType = () => [string, (search_query: string) => void];

export const useSearchQuery: useSearchQueryType = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { valueFromLS, setValueFromLS } = useLocalStorage(SEARCH_TERM);
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get(URL_SEARCH_PARAMS.search_query.name) || valueFromLS || ''
  );

  useEffect(() => {
    setSearchTerm(
      searchParams.get(URL_SEARCH_PARAMS.search_query.name) || valueFromLS || ''
    );
  }, [searchParams, valueFromLS]);

  useEffect(() => {
    setValueFromLS(searchTerm);
  }, [searchTerm, setValueFromLS]);

  // useEffect(() => {
  //   if (!searchParams.get(URL_SEARCH_PARAMS.search_query.name)) {
  //     searchParams.delete(URL_SEARCH_PARAMS.search_query.name);
  //     setSearchParams(searchParams);
  //   }
  // }, [searchParams, setSearchParams]);

  const setSearchQuery = (searchQuery: string) => {
    searchParams.set(URL_SEARCH_PARAMS.search_query.name, searchQuery);
    setSearchParams(searchParams);
    setValueFromLS(searchQuery);
  };

  return [searchTerm, setSearchQuery];
};
