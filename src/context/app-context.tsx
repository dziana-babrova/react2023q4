// import { API_METHODS } from 'consts/consts';
// import { useFetch } from 'hooks/useFetch';
// import { useLimitPerPage } from 'hooks/useLimitPerPage';
// import { PaginationState, usePagination } from 'hooks/usePagination';
// import { useSearchQuery } from 'hooks/useSearchQuery';
// import React, { createContext, PropsWithChildren, useState } from 'react';
// import { ApiResponse, Show } from 'src/types/api-types';

// export type ContextType = {
//   limit: string;
//   setLimitPerPage: (limit: string) => void;
//   searchQuery: string;
//   setSearchQuery: (search_query: string) => void;
//   page: string;
//   setPage: React.Dispatch<string>;
//   data: ApiResponse<Show[]> | null;
//   isLoading: boolean;
//   hasError: boolean;
// };

// type ProviderType = PropsWithChildren;

// export const Context = createContext<ContextType | null>(null);

// export function AppContextProvider({ children }: ProviderType) {
//   const [limit, setLimitPerPage] = useLimitPerPage();
//   const [page, setPage] = useState('1');
//   const [searchQuery, setSearchQuery] = useSearchQuery();
//   const [data, isLoading, hasError] = useFetch(
//     API_METHODS.all_shows,
//     searchQuery,
//     limit,
//     '1'
//   );
//   return (
//     <Context.Provider
//       value={{
//         limit,
//         setLimitPerPage,
//         searchQuery,
//         setSearchQuery,
//         page,
//         setPage,
//         data,
//         isLoading,
//         hasError,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// }
