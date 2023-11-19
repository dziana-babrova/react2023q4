import { URL_SEARCH_PARAMS } from 'consts/consts';
import { ChangeEvent } from 'react';
import './pagination.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, setItemsPerPage } from 'store-manager/slices/items-slice';
import { AppDispatch, RootState } from 'store-manager/store';
import { selectPage, setPage } from 'store-manager/slices/page-slice';
import { usePagination } from 'hooks/usePagination';

export const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const itemsPerPage = useSelector<RootState, string>(selectItems);
  const page = useSelector<RootState, string>(selectPage);
  const paginationState = usePagination();

  const changeItemsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setItemsPerPage(e.target.value));
    dispatch(setPage(URL_SEARCH_PARAMS.page.default_value));
  };

  return (
    <div className="pagination">
      <button
        disabled={paginationState.first.disabled}
        className="pagination-button"
        onClick={() => {
          dispatch(setPage(paginationState.first.value.toString()));
        }}
      >
        {'<<'}
      </button>
      <button
        disabled={paginationState.prev.disabled}
        className="pagination-button"
        onClick={() => {
          dispatch(setPage(paginationState.prev.value.toString()));
        }}
      >
        {'<'}
      </button>
      <div className="pagination-counter">{`${page} of ${paginationState.total}`}</div>
      <button
        disabled={paginationState.next.disabled}
        className="pagination-button"
        onClick={() => {
          dispatch(setPage(paginationState.next.value.toString()));
        }}
      >
        {'>'}
      </button>
      <button
        disabled={paginationState.last.disabled}
        className="pagination-button"
        data-testid="page-next"
        onClick={() => {
          dispatch(setPage(paginationState.last.value.toString()));
        }}
      >
        {'>>'}
      </button>
      <select
        className="pagination-select"
        name="items"
        id=""
        defaultValue={itemsPerPage}
        onChange={changeItemsPerPage}
      >
        {Object.values(URL_SEARCH_PARAMS.limit_per_page.options).map(
          (item: string) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          }
        )}
      </select>
    </div>
  );
};
