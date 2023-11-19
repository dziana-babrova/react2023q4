import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './api-slice';

export type ShowState = {
  loading: boolean | null;
  error: boolean | null;
};

const initialState: ShowState = { loading: null, error: null };

export const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.getShow.matchFulfilled, (state) => {
      state.loading = false;
    });

    builder.addMatcher(apiSlice.endpoints.getShow.matchPending, (state) => {
      state.loading = true;
    });

    builder.addMatcher(apiSlice.endpoints.getShow.matchRejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
