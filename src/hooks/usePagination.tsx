import { useEffect, useState } from 'react';

export type PaginationState = {
  limit: string;
  currentPage: string;
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

type usePaginationProps = {
  limit: string;
  page: string;
  total: number | undefined;
};

type usePaginationType = (props: usePaginationProps) => PaginationState;

export const usePagination: usePaginationType = ({ limit, page, total }) => {
  const [paginationState, setPaginationState] = useState<PaginationState>({
    currentPage: page,
    total: 0,
    limit: limit,
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
    const totalPages = Math.ceil(Number(total) / Number(limit));

    setPaginationState({
      limit,
      currentPage: page,
      total: totalPages,
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
  }, [total, limit, page]);

  return paginationState;
};
