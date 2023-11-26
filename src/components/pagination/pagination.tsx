import { URL_SEARCH_PARAMS } from '@/consts/consts';
import { ChangeEvent } from 'react';
import styles from './pagination.module.scss';
import { usePagination } from '@/hooks/usePagination';
import { useRouter } from 'next/router';

type PaginationProps = {
  limit: string;
  total: string;
  page: string;
};

export const Pagination = ({ limit, total, page }: PaginationProps) => {
  const router = useRouter();
  const paginationState = usePagination({ limit, total, page });

  const changeItemsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace({
      query: {
        ...router.query,
        limit: e.target.value,
        page: URL_SEARCH_PARAMS.page.default_value,
      },
    });
  };

  const changePage = (page: string) => {
    router.replace({
      query: {
        ...router.query,
        page: page,
      },
    });
  };

  return (
    <div className={styles['pagination']}>
      <button
        disabled={paginationState.first.disabled}
        className={styles['pagination-button']}
        onClick={() => {
          changePage(paginationState.first.value.toString());
        }}
      >
        {'<<'}
      </button>
      <button
        disabled={paginationState.prev.disabled}
        className={styles['pagination-button']}
        onClick={() => {
          changePage(paginationState.prev.value.toString());
        }}
      >
        {'<'}
      </button>
      <div
        className={styles['pagination-counter']}
      >{`${paginationState.currentPage} of ${paginationState.total}`}</div>
      <button
        disabled={paginationState.next.disabled}
        className={styles['pagination-button']}
        onClick={() => {
          changePage(paginationState.next.value.toString());
        }}
      >
        {'>'}
      </button>
      <button
        disabled={paginationState.last.disabled}
        className={styles['pagination-button']}
        data-testid="page-next"
        onClick={() => {
          changePage(paginationState.last.value.toString());
        }}
      >
        {'>>'}
      </button>
      <select
        className={styles['pagination-select']}
        name="items"
        id=""
        defaultValue={paginationState.limit}
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
