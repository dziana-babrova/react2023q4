import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { URL_SEARCH_PARAMS } from 'consts/consts';
import { setSearchValue } from '../store-manager/slices/search-slice';
import { setPage } from '../store-manager/slices/page-slice';
import { setItemsPerPage } from '../store-manager/slices/items-slice';
import { AppDispatch, RootState } from '../store-manager/store';

export const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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

  const initializeParams = useCallback(() => {
    if (isFirstLoading) {
      const search = searchParams.get(URL_SEARCH_PARAMS.search_query.name);
      dispatch(setSearchValue(search || ''));
      const page = searchParams.get(URL_SEARCH_PARAMS.page.name);
      dispatch(setPage(page || URL_SEARCH_PARAMS.page.default_value));
      const limit = searchParams.get(URL_SEARCH_PARAMS.limit_per_page.name);
      dispatch(
        setItemsPerPage(limit || URL_SEARCH_PARAMS.limit_per_page.default_value)
      );
      setIsFirstLoading(false);
    }
  }, [dispatch, isFirstLoading, searchParams]);

  useEffect(() => {
    initializeParams();
  }, [initializeParams]);

  useEffect(() => {
    if (!isFirstLoading) {
      setParam(URL_SEARCH_PARAMS.limit_per_page.name, limit);
    }
  }, [isFirstLoading, limit, setParam]);

  useEffect(() => {
    if (!isFirstLoading) {
      setParam(URL_SEARCH_PARAMS.page.name, page);
    }
  }, [isFirstLoading, page, setParam]);

  useEffect(() => {
    if (!isFirstLoading) {
      setParam(URL_SEARCH_PARAMS.search_query.name, search);
    }
  }, [isFirstLoading, search, setParam]);

  return [search, limit, page];
};
