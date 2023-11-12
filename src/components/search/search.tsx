import { FormEvent, useContext, useRef } from 'react';
import './search.scss';
import { Context } from 'context/app-context';
import { URL_SEARCH_PARAMS } from 'consts/consts';

export const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const context = useContext(Context);

  const onClick = (e: FormEvent) => {
    e.preventDefault();
    context?.setSearchQuery(searchRef.current?.value || '');
    context?.setPage(URL_SEARCH_PARAMS.page.default_value);
  };

  return (
    <form className="search-form" onSubmit={onClick} action="">
      <input
        className="search-field"
        type="search"
        ref={searchRef}
        placeholder="SEARCH"
        defaultValue={context?.searchQuery}
      />
      <span
        className="search-submit"
        onClick={onClick}
        data-testid="search-submit"
      />
    </form>
  );
};
