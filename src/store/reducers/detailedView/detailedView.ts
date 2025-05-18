import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { RequestStatus } from "../../../types/common";
import { DetailedViewState } from "../../../types/storeState";
import { OmdbMovie } from "../../../types/movie";

const initialState: DetailedViewState = {
  status: RequestStatus.IDLE,
  data: null,
  error: null,
};

export const fetchDetailedViewData = createAsyncThunk<
  OmdbMovie,
  string,
  { rejectValue: string }
>("detailedView/fetchDetailedViewData", async (movieTitle, thunkAPI) => {
  try {
    // console.log("Fetching movie...");
    const baseUrl =
      "https://www.omdbapi.com/?" +
      new URLSearchParams({ apikey: "f5082463", t: movieTitle }).toString();
    const response = await fetch(baseUrl);
    const data = await response.json();
    // console.log("Movie fetched:", data);
    return data as OmdbMovie;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch Movie");
  }
});

export const detailedViewSlice = createSlice({
  name: "detailedView",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<DetailedViewState>) => {
    builder
      .addCase(fetchDetailedViewData.pending, (state) => {
        state.status = RequestStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchDetailedViewData.fulfilled, (state, action) => {
        state.status = RequestStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchDetailedViewData.rejected, (state, action) => {
        state.status = RequestStatus.FAILED;
        state.error = action.payload;
      });
  },
});

export const detailedViewReducer = detailedViewSlice.reducer;

export const selectDetailedViewData = (state: {
  detailedView: DetailedViewState;
}) => state.detailedView.data;
