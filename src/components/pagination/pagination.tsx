import { URL_SEARCH_PARAMS } from 'consts/consts';
import { ChangeEvent, useContext } from 'react';
import './pagination.scss';
import { Context } from 'context/app-context';

export const Pagination = () => {
  const context = useContext(Context);
  const changeItemsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    context?.setLimitPerPage(e.target.value);
    context?.setPage(context?.paginationState.first.value.toString());
  };

  return (
    <div className="pagination">
      <button
        disabled={context?.paginationState.first.disabled}
        className="pagination-button"
        onClick={() => {
          console.log(context);
          context?.setPage(context?.paginationState.first.value.toString());
        }}
      >
        {'<<'}
      </button>
      <button
        disabled={context?.paginationState.prev.disabled}
        className="pagination-button"
        onClick={() => {
          context?.setPage(context?.paginationState.prev.value.toString());
        }}
      >
        {'<'}
      </button>
      <div className="pagination-counter">{`${context?.page} of ${context?.total}`}</div>
      <button
        disabled={context?.paginationState.next.disabled}
        className="pagination-button"
        onClick={() => {
          context?.setPage(context?.paginationState.next.value.toString());
        }}
      >
        {'>'}
      </button>
      <button
        disabled={context?.paginationState.last.disabled}
        className="pagination-button"
        onClick={() => {
          context?.setPage(context?.paginationState.last.value.toString());
        }}
      >
        {'>>'}
      </button>
      <select
        className="pagination-select"
        name="items"
        id=""
        defaultValue={context?.limit}
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
