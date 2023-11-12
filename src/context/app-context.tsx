import { API_METHODS } from 'consts/consts';
import { useFetch } from 'hooks/useFetch';
import { useLimitPerPage } from 'hooks/useLimitPerPage';
import { PaginationState, usePagination } from 'hooks/usePagination';
import { useSearchQuery } from 'hooks/useSearchQuery';
import React, { createContext, PropsWithChildren } from 'react';
import { ApiResponse, Show } from 'src/types/api-types';

export type ContextType = {
  limit: string;
  setLimitPerPage: (limit: string) => void;
  searchQuery: string;
  setSearchQuery: (search_query: string) => void;
  page: string;
  total: number;
  paginationState: PaginationState;
  setPage: React.Dispatch<string>;
  data: ApiResponse<Show[]> | null;
  isLoading: boolean;
  hasError: boolean;
};

type ProviderType = PropsWithChildren;

export const Context = createContext<ContextType | null>(null);

export function AppContextProvider({ children }: ProviderType) {
  const [limit, setLimitPerPage] = useLimitPerPage();
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const [page, total, paginationState, setPage] = usePagination(
    searchQuery,
    limit
  );
  const [data, isLoading, hasError] = useFetch(
    API_METHODS.all_shows,
    searchQuery,
    limit,
    page
  );
  return (
    <Context.Provider
      value={{
        limit,
        setLimitPerPage,
        searchQuery,
        setSearchQuery,
        page,
        total,
        paginationState,
        setPage,
        data,
        isLoading,
        hasError,
      }}
    >
      {children}
    </Context.Provider>
  );
}
