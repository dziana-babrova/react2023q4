import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { URL_SEARCH_PARAMS } from 'consts/consts';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: URL_SEARCH_PARAMS.search_query.default_value,
  },
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.value;
