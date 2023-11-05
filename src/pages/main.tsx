import { SearchBar } from 'components/search/search';
import { CardsList } from 'components/cards/cards-list';
import { useFetch } from 'hooks/useFetch';
import { Loader } from 'components/loader/loader';
import { ErrorMessage } from 'components/error-message/error-message';
import { Pagination } from 'components/pagination/pagination';
import { useLimitPerPage } from 'hooks/useLimitPerPage';
import { useSearchQuery } from 'hooks/useSearchQuery';
import { API_METHODS } from 'consts/consts';
import { usePagination } from 'hooks/usePagination';
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
  const [limit, setLimitPerPage] = useLimitPerPage();
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const [page, total, paginationState, setPage] = usePagination(
    searchQuery,
    limit
  );
  const [data, isLoading, hasError] = useFetch(
    API_METHODS.all_shows,
    searchQuery,
    limit,
    page
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setPage('1');
  };

  return (
    <>
      <div className="content-list">
        <div className="page-header">
          <SearchBar
            searchValue={searchQuery}
            setSearchValue={handleSearch}
          ></SearchBar>
        </div>
        {isLoading && <Loader></Loader>}
        {hasError && (
          <ErrorMessage text="Oops... An error occurred. Please try again later"></ErrorMessage>
        )}
        {!isLoading && data?.result && Boolean(data?.result.length) && (
          <>
            <CardsList result={data.result}></CardsList>
            <Pagination
              limit={limit}
              setLimitPerPage={setLimitPerPage}
              total={total}
              setPage={setPage}
              page={page}
              paginationState={paginationState}
            ></Pagination>
          </>
        )}
        {!isLoading && !hasError && !data?.result.length && (
          <div>
            <ErrorMessage text="No results found. Remove the search term and try again"></ErrorMessage>
            {Number(page) > total && (
              <button
                onClick={() => {
                  setPage('1');
                }}
              >
                Reload the page
              </button>
            )}
          </div>
        )}
      </div>
      <Outlet context={{ limit, searchQuery }}></Outlet>
    </>
  );
};
