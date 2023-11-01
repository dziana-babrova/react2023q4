import { SearchBar } from 'components/search/search';
import { CardsList } from 'components/cards/cards-list';
import { SEARCH_TERM } from 'consts/consts';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useFetch } from 'hooks/useFetch';

export const MainPage = () => {
  const { valueFromLS, setValueFromLS } = useLocalStorage(SEARCH_TERM);
  const [data] = useFetch(valueFromLS);

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
      <CardsList response={data}></CardsList>
    </>
  );
};
