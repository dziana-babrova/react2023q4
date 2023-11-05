import { API_METHODS, URL_SEARCH_PARAMS } from 'consts/consts';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllData } from 'services/api-service';
import { ApiResponse } from 'src/types/api-types';

export type PaginationState = {
  first: {
    disabled: boolean;
    value: number;
  };
  prev: {
    disabled: boolean;
    value: number;
  };
  next: {
    disabled: boolean;
    value: number;
  };
  last: {
    disabled: boolean;
    value: number;
  };
};

type usePaginationType = (
  value: string,
  limit: string
) => [
  string,
  number,
  PaginationState,
  React.Dispatch<React.SetStateAction<string>>
];

export const usePagination: usePaginationType = (value, limit) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get(URL_SEARCH_PARAMS.page.name) ||
      URL_SEARCH_PARAMS.page.default_value
  );
  const [totalPages, setTotal] = useState(0);
  const [paginationState, setPaginationState] = useState<PaginationState>({
    first: {
      disabled: false,
      value: 1,
    },
    prev: {
      disabled: false,
      value: 1,
    },
    next: {
      disabled: false,
      value: 1,
    },
    last: {
      disabled: false,
      value: 1,
    },
  });

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getAllData<ApiResponse<number>>(
          API_METHODS.count,
          value,
          limit,
          (Number(page) - 1).toString()
        );
        setTotal(Math.ceil(data.result / Number(limit)));
        setPaginationState({
          first: {
            disabled: Number(page) === 1,
            value: 1,
          },
          prev: {
            disabled: Number(page) === 1,
            value: Number(page) - 1,
          },
          next: {
            disabled: totalPages === Number(page),
            value: Number(page) + 1,
          },
          last: {
            disabled: totalPages === Number(page),
            value: totalPages,
          },
        });
      };
      fetchData();
    } catch {}
  }, [limit, page, totalPages, value]);

  // useEffect(() => {
  //   if (!searchParams.get(URL_SEARCH_PARAMS.page.name)) {
  //     searchParams.delete(URL_SEARCH_PARAMS.page.name);
  //     setSearchParams(searchParams);
  //   }
  // }, [searchParams, setSearchParams]);

  useEffect(() => {
    searchParams.set(URL_SEARCH_PARAMS.page.name, page);
    setSearchParams(searchParams);
  }, [page, searchParams, setSearchParams]);

  return [page, totalPages, paginationState, setPage];
};
