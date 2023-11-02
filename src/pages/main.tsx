import { SearchBar } from 'components/search/search';
import { CardsList } from 'components/cards/cards-list';
import { SEARCH_TERM } from 'consts/consts';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useFetch } from 'hooks/useFetch';
import { Loader } from 'components/loader/loader';
import { ErrorMessage } from 'components/error-message/error-message';

export const MainPage = () => {
  const { valueFromLS, setValueFromLS } = useLocalStorage(SEARCH_TERM);
  const [data, isLoading, hasError] = useFetch(valueFromLS);

  const handleSearch = (value: string) => {
    setValueFromLS(value);
  };

  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Characters</h2>
        <SearchBar
          searchValue={valueFromLS}
          setSearchValue={handleSearch}
        ></SearchBar>
      </div>
      {isLoading && <Loader></Loader>}
      {hasError && (
        <ErrorMessage text="Oops... An error occurred. Please try again later"></ErrorMessage>
      )}
      {!isLoading && data?.results && (
        <CardsList results={data.results}></CardsList>
      )}
      {!isLoading && !hasError && !data?.results && (
        <ErrorMessage text="No results found. Remove the search term and try again"></ErrorMessage>
      )}
    </>
  );
};
