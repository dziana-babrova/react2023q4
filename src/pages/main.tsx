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
        <SearchBar
          searchValue={valueFromLS}
          setSearchValue={handleSearch}
        ></SearchBar>
      </div>
      {isLoading && <Loader></Loader>}
      {hasError && (
        <ErrorMessage text="Oops... An error occurred. Please try again later"></ErrorMessage>
      )}
      {!isLoading && data?.products && (
        <CardsList products={data.products}></CardsList>
      )}
      {!isLoading && !hasError && !data?.products && (
        <ErrorMessage text="No results found. Remove the search term and try again"></ErrorMessage>
      )}
    </>
  );
};
