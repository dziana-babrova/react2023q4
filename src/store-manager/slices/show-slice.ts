import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './api-slice';
import { SingleShowApiResponse } from 'src/types/api-types';

type ShowsState = {
  shows: SingleShowApiResponse | null;
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
      apiSlice.endpoints.getShow.matchFulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.shows = payload;
      }
    );

    builder.addMatcher(apiSlice.endpoints.getShow.matchPending, (state) => {
      state.loading = true;
    });

    builder.addMatcher(apiSlice.endpoints.getShow.matchRejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
