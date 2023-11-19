import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store-manager/store';
import { selectSearch } from 'store-manager/slices/search-slice';
import { selectItems } from 'store-manager/slices/items-slice';
import { useGetTotalQuery } from 'store-manager/slices/api-slice';
import { selectPage } from 'store-manager/slices/page-slice';

export type PaginationState = {
  total: number;
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

type usePaginationType = () => PaginationState;

export const usePagination: usePaginationType = () => {
  const search = useSelector<RootState, string>(selectSearch);
  const limit = useSelector<RootState, string>(selectItems);
  const page = useSelector<RootState, string>(selectPage);
  const { data } = useGetTotalQuery({ search, limit, page });
  const [paginationState, setPaginationState] = useState<PaginationState>({
    total: 0,
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
    if (!data) return;
    const total = Math.ceil(data.result / Number(limit));

    setPaginationState({
      total,
      first: {
        disabled: Number(page) === 1,
        value: 1,
      },
      prev: {
        disabled: Number(page) === 1,
        value: Number(page) - 1,
      },
      next: {
        disabled: total === Number(page),
        value: Number(page) + 1,
      },
      last: {
        disabled: total === Number(page),
        value: total,
      },
    });
  }, [data, limit, page]);

  return paginationState;
};
