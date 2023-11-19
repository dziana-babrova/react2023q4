// import { SEARCH_TERM, URL_SEARCH_PARAMS } from 'consts/consts';
// import { useCallback, useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useLocalStorage } from './useLocalStorage';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../store-manager/store';
// import {
//   selectSearch,
//   setSearchValue,
// } from '../store-manager/slices/search-slice';

// type useSearchQueryType = () => [string, (search_query: string) => void];

// export const useSearchQuery: useSearchQueryType = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const { valueFromLS, setValueFromLS } = useLocalStorage(SEARCH_TERM);
//   const [isFirstLoading, setIsFirstLoading] = useState(true);
//   const search = useSelector<RootState, string>(selectSearch);
//   const dispatch = useDispatch<AppDispatch>();

//   // const initiateSearchTermParam = useCallback(() => {
//   //   if (isFirstLoading) {
//   //     const initialValue =
//   //       searchParams.get(URL_SEARCH_PARAMS.search_query.name) ||
//   //       valueFromLS ||
//   //       URL_SEARCH_PARAMS.search_query.default_value;
//   //     dispatch(setSearchValue(initialValue));
//   //     setIsFirstLoading(false)
//   //   }
//   // }, [dispatch, isFirstLoading, searchParams, valueFromLS]);

//   // useEffect(() => {
//   //   if (isFirstLoading) {
//   //     const initialValue =
//   //       searchParams.get(URL_SEARCH_PARAMS.search_query.name) ||
//   //       valueFromLS ||
//   //       URL_SEARCH_PARAMS.search_query.default_value;
//   //     dispatch(setSearchValue(initialValue));
//   //     setIsFirstLoading(false);
//   //   }
//   // }, [dispatch, isFirstLoading, searchParams, valueFromLS]);

//   // useEffect(() => {
//   //   setValueFromLS(search);
//   // }, [search, setValueFromLS]);

//   // useEffect(() => {
//   //   if (!searchParams.get(URL_SEARCH_PARAMS.search_query.name)) {
//   //     searchParams.delete(URL_SEARCH_PARAMS.search_query.name);
//   //     setSearchParams(searchParams);
//   //   }
//   // }, [searchParams, setSearchParams]);

//   const setSearchQuery = (searchQuery: string) => {
//     searchParams.set(URL_SEARCH_PARAMS.search_query.name, searchQuery);
//     setSearchParams(searchParams);
//     setValueFromLS(searchQuery);
//   };

//   return [search, setSearchQuery];
// };
