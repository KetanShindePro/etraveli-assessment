import { createSlice } from "@reduxjs/toolkit";
import { DetailedViewState } from "../../../types/storeState";

const initialState: DetailedViewState = {
  data: null,
};

export const detailedViewSlice = createSlice({
  name: "detailedView",
  initialState,
  reducers: {
    setDetailedViewData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const detailedViewReducer = detailedViewSlice.reducer;

export const { setDetailedViewData } = detailedViewSlice.actions;

export const selectDetailedViewData = (state: {
  detailedView: DetailedViewState;
}) => state.detailedView.data;
