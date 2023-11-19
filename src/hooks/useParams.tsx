import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { SEARCH_TERM, URL_SEARCH_PARAMS } from 'consts/consts';
import { setSearchValue } from '../store-manager/slices/search-slice';
import { setPage } from '../store-manager/slices/page-slice';
import { setItemsPerPage } from '../store-manager/slices/items-slice';
import { AppDispatch, RootState } from '../store-manager/store';
import { getExistingLimitPerPage } from 'services/query-params-service';
import { useLocalStorage } from './useLocalStorage';

export const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { valueFromLS, setValueFromLS } = useLocalStorage(SEARCH_TERM);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const search = useSelector<RootState, string>((state) => state.search.value);
  const limit = useSelector<RootState, string>((state) => state.items.value);
  const page = useSelector<RootState, string>((state) => state.page.value);
  const dispatch = useDispatch<AppDispatch>();

  const setParam = useCallback(
    (name: string, value: string) => {
      searchParams.set(name, value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const deleteParam = useCallback(
    (name: string) => {
      searchParams.delete(name);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const initializeParams = useCallback(() => {
    if (isFirstLoading) {
      const search =
        searchParams.get(URL_SEARCH_PARAMS.search_query.name) || valueFromLS;
      if (!search) deleteParam(URL_SEARCH_PARAMS.search_query.name);
      dispatch(setSearchValue(search || ''));
      const page = searchParams.get(URL_SEARCH_PARAMS.page.name);
      dispatch(setPage(page || URL_SEARCH_PARAMS.page.default_value));
      const limit = getExistingLimitPerPage(
        searchParams.get(URL_SEARCH_PARAMS.limit_per_page.name)
      );
      dispatch(setItemsPerPage(limit));
      setIsFirstLoading(false);
    }
  }, [deleteParam, dispatch, isFirstLoading, searchParams, valueFromLS]);

  useEffect(() => {
    initializeParams();
  }, [initializeParams]);

  useEffect(() => {
    if (!isFirstLoading && limit) {
      setParam(URL_SEARCH_PARAMS.limit_per_page.name, limit);
    }
  }, [isFirstLoading, limit, setParam]);

  useEffect(() => {
    if (!isFirstLoading && page) {
      setParam(URL_SEARCH_PARAMS.page.name, page);
    }
  }, [isFirstLoading, page, setParam]);

  useEffect(() => {
    if (!isFirstLoading) {
      setParam(URL_SEARCH_PARAMS.search_query.name, search);
      setValueFromLS(search);
    }
  }, [isFirstLoading, search, setParam, setValueFromLS]);

  return [search, limit, page];
};
