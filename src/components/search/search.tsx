import { FormEvent, useRef } from 'react';
import './search.scss';
import { URL_SEARCH_PARAMS } from 'consts/consts';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearch,
  setSearchValue,
} from 'store-manager/slices/search-slice';
import { AppDispatch, RootState } from 'store-manager/store';
import { setPage } from 'store-manager/slices/page-slice';

export const SearchBar = () => {
  const value = useSelector<RootState, string>(selectSearch);
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setSearchValue(searchRef.current?.value || ''));
    dispatch(setPage(URL_SEARCH_PARAMS.page.default_value));
  };

  return (
    <form className="search-form" onSubmit={onClick} action="">
      <input
        className="search-field"
        type="search"
        ref={searchRef}
        placeholder="SEARCH"
        defaultValue={value}
      />
      <span
        className="search-submit"
        onClick={onClick}
        data-testid="search-submit"
      />
    </form>
  );
};
