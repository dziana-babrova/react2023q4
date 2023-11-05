import { SearchBar } from 'components/search/search';
import { CardsList } from 'components/cards/cards-list';
import { useFetch } from 'hooks/useFetch';
import { Loader } from 'components/loader/loader';
import { ErrorMessage } from 'components/error-message/error-message';
import { Pagination } from 'components/pagination/pagination';
import { useLimitPerPage } from 'hooks/useLimitPerPage';
import { useSearchQuery } from 'hooks/useSearchQuery';

export const MainPage = () => {
  const [limit, setLimitPerPage] = useLimitPerPage();
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const [data, isLoading, hasError] = useFetch(searchQuery, limit);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <>
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
      {!isLoading && data?.result && (
        <>
          <CardsList result={data.result}></CardsList>
          <Pagination
            limit={limit}
            setLimitPerPage={setLimitPerPage}
          ></Pagination>
        </>
      )}
      {!isLoading && !hasError && !data?.result && (
        <ErrorMessage text="No results found. Remove the search term and try again"></ErrorMessage>
      )}
    </>
  );
};
