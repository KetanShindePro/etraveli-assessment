import { createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from "../../../types/common";
import { DetailedViewState } from "../../../types/storeState";

const initialState: DetailedViewState = {
  status: RequestStatus.IDLE,
  data: null,
  error: null,
};

export const detailedViewSlice = createSlice({
  name: "detailedView",
  initialState,
  reducers: {
    setDetailedViewData: (state, action) => {
      state.data = action.payload;
    },
    setDetailedViewStatus: (state, action) => {
      state.status = action.payload;
    },
    setDetailedViewError: (state, action) => {
      state.error = action.payload;
    },
  },
});
