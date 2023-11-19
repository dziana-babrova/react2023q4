import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { URL_SEARCH_PARAMS } from 'consts/consts';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    value: URL_SEARCH_PARAMS.limit_per_page.initial_value,
  },
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setItemsPerPage } = itemsSlice.actions;

export const selectItems = (state: RootState) => state.items.value;
