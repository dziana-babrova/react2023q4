import { combineReducers } from '@reduxjs/toolkit';
import { searchSlice } from './slices/search-slice';
import { pageSlice } from './slices/page-slice';
import { itemsSlice } from './slices/items-slice';
import { apiSlice } from './slices/api-slice';

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  search: searchSlice.reducer,
  page: pageSlice.reducer,
  items: itemsSlice.reducer,
});
