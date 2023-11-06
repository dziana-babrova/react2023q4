import { FormEvent, useRef } from 'react';
import './search.scss';

type SearchBarProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const onClick = (e: FormEvent) => {
    e.preventDefault();
    setSearchValue(searchRef.current?.value || '');
  };

  return (
    <form className="search-form" onSubmit={onClick} action="">
      <input
        className="search-field"
        type="search"
        ref={searchRef}
        placeholder="SEARCH"
        defaultValue={searchValue}
      />
      <span className="search-submit" onClick={onClick} />
    </form>
  );
};
