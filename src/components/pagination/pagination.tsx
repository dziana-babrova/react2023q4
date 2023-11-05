import { URL_SEARCH_PARAMS } from 'consts/consts';
import { ChangeEvent } from 'react';
import './pagination.scss';
import { PaginationState } from 'hooks/usePagination';

type PaginationType = {
  limit: string;
  setLimitPerPage: (limit: string) => void;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  page: string;
  paginationState: PaginationState;
};

export const Pagination = ({
  limit,
  setLimitPerPage,
  total,
  page,
  setPage,
  paginationState,
}: PaginationType) => {
  const changeItemsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    setLimitPerPage(e.target.value);
    setPage(paginationState.first.value.toString());
  };

  return (
    <div className="pagination">
      <button
        disabled={paginationState.first.disabled}
        className="pagination-button"
        onClick={() => {
          setPage(paginationState.first.value.toString());
        }}
      >
        {'<<'}
      </button>
      <button
        disabled={paginationState.prev.disabled}
        className="pagination-button"
        onClick={() => {
          setPage(paginationState.prev.value.toString());
        }}
      >
        {'<'}
      </button>
      <div className="pagination-counter">{`${page} of ${total}`}</div>
      <button
        disabled={paginationState.next.disabled}
        className="pagination-button"
        onClick={() => {
          setPage(paginationState.next.value.toString());
        }}
      >
        {'>'}
      </button>
      <button
        disabled={paginationState.last.disabled}
        className="pagination-button"
        onClick={() => {
          setPage(paginationState.last.value.toString());
        }}
      >
        {'>>'}
      </button>
      <select
        className="pagination-select"
        name="items"
        id=""
        defaultValue={limit}
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
