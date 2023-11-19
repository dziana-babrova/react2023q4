import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: '1',
  },
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export const selectPage = (state: RootState) => state.page.value;
