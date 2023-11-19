import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { URL_SEARCH_PARAMS } from 'consts/consts';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: URL_SEARCH_PARAMS.page.default_value,
  },
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export const selectPage = (state: RootState) => state.page.value;
