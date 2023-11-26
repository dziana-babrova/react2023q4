import { FormEvent, useRef } from 'react';
import styles from './search.module.scss';
import { URL_SEARCH_PARAMS } from '@/consts/consts';
import { useRouter } from 'next/router';

type SearchBarProps = {
  search: string;
};

export const SearchBar = ({ search }: SearchBarProps) => {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  const onClick = (e: FormEvent) => {
    e.preventDefault();
    router.replace({
      query: {
        ...router.query,
        search: searchRef.current?.value || '',
        page: URL_SEARCH_PARAMS.page.default_value,
      },
    });
  };

  return (
    <form className={styles['search-form']} onSubmit={onClick} action="">
      <input
        className={styles['search-field']}
        type="search"
        ref={searchRef}
        placeholder="SEARCH"
        defaultValue={search}
      />
      <span
        className={styles['search-submit']}
        onClick={onClick}
        data-testid="search-submit"
      />
    </form>
  );
};
