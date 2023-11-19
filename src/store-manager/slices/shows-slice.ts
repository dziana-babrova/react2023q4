import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './api-slice';
import { ApiResponse, Show } from 'src/types/api-types';

export type ShowsState = {
  shows: ApiResponse<Show[]> | null;
  loading: boolean | null;
  error: boolean | null;
};

const initialState: ShowsState = { shows: null, loading: null, error: null };

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getShows.matchFulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.shows = payload;
      }
    );

    builder.addMatcher(apiSlice.endpoints.getShows.matchPending, (state) => {
      state.loading = true;
    });

    builder.addMatcher(apiSlice.endpoints.getShows.matchRejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
