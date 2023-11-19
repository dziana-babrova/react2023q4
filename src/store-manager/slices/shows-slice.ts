import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './api-slice';

export type ShowsState = {
  loading: boolean | null;
  error: boolean | null;
};

const initialState: ShowsState = { loading: null, error: null };

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.getShows.matchFulfilled, (state) => {
      state.loading = false;
    });

    builder.addMatcher(apiSlice.endpoints.getShows.matchPending, (state) => {
      state.loading = true;
    });

    builder.addMatcher(apiSlice.endpoints.getShows.matchRejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
