import { createSlice } from "@reduxjs/toolkit";
import { StoreState } from "../../../types/storeState";

const initialState = {
  sortBy: undefined,
  sortOrder: undefined,
  searchQuery: undefined,
};

const searchSortSlice = createSlice({
  name: "searchSort",
  initialState: initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSortBy, setSortOrder, setSearchQuery } =
  searchSortSlice.actions;

export const searchSortReducer = searchSortSlice.reducer;

export const selectSortBy = (state: StoreState) => state.searchSort.sortBy;
export const selectSortOrder = (state: StoreState) =>
  state.searchSort.sortOrder;
export const selectSearchQuery = (state: StoreState) =>
  state.searchSort.searchQuery;
