import { URL_SEARCH_PARAMS } from 'consts/consts';
import { ChangeEvent } from 'react';
import './pagination.scss';

type PaginationType = {
  limit: string;
  setLimitPerPage: (limit: string) => void;
};

export const Pagination = ({ limit, setLimitPerPage }: PaginationType) => {
  const changeItemsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    setLimitPerPage(e.target.value);
  };

  const changePage = () => {};

  return (
    <div className="pagination">
      <div className="pagination-button" onClick={changePage}>
        {'<'}
      </div>
      <div className="pagination-button" onClick={changePage}>
        {'<<'}
      </div>
      <div className="pagination-counter">{'0 of 10'}</div>
      <div className="pagination-button" onClick={changePage}>
        {'>'}
      </div>
      <div className="pagination-button" onClick={changePage}>
        {'>>'}
      </div>
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
