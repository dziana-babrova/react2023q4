import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    value: '1',
  },
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setItemsPerPage } = itemsSlice.actions;

export const selectItems = (state: RootState) => state.items.value;
