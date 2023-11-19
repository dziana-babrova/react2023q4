import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from 'consts/api';
import { API_METHODS } from 'consts/consts';
import { ApiResponse, Show, SingleShowApiResponse } from 'src/types/api-types';

type ApiProps = {
  search: string;
  page: string;
  limit: string;
};

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: API.all_shows }),

  endpoints: (builder) => ({
    getShows: builder.query<ApiResponse<Show[]>, ApiProps>({
      query: ({ search, page, limit }) => ({
        url: '',
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: API_METHODS.all_shows,
          params: {
            search: {
              network: 0,
              genre: 0,
              country: 'string',
              year: 0,
              watching: 0,
              category: 'string',
              status: 'string',
              sort: 'string',
              query: search,
            },
            page: page,
            pageSize: limit,
          },
          id: 1,
        }),
      }),
    }),

    getTotal: builder.query<ApiResponse<number>, ApiProps>({
      query: ({ search, page, limit }) => ({
        url: '',
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: API_METHODS.count,
          params: {
            search: {
              network: 0,
              genre: 0,
              country: 'string',
              year: 0,
              watching: 0,
              category: 'string',
              status: 'string',
              sort: 'string',
              query: search,
            },
            page: page,
            pageSize: limit,
          },
          id: 1,
        }),
      }),
    }),

    getShow: builder.query<SingleShowApiResponse, string>({
      query: (id) => ({
        url: '',
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: API_METHODS.single_show,
          params: {
            showId: id,
            withEpisodes: false,
          },
          id: 1,
        }),
      }),
    }),
  }),
});

export const { useGetShowsQuery, useGetTotalQuery, useGetShowQuery } = apiSlice;