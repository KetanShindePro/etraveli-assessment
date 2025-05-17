import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { MoviesState, RequestStatus } from "../../../types/storeState";
import { Pagination } from "../../../types/common";

export const fetchMovies = createAsyncThunk<
  Pagination,
  void,
  { rejectValue: string }
>("movies/fetchMovies", async (_, thunkAPI) => {
  try {
    console.log("Fetching movies...");
    const response = await fetch("/api/films/?format=json");
    const data = await response.json();
    console.log("Movies fetched successfully:", data);
    return data as Pagination;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch Movies");
  }
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    status: RequestStatus.IDLE,
    data: {
      count: 0,
      next: null,
      previous: null,
      results: [],
    },
    error: null,
  } as MoviesState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<MoviesState>) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.status = RequestStatus.LOADING;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = RequestStatus.SUCCEEDED;
      state.data = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = RequestStatus.FAILED;
      state.error = action.payload;
    });
  },
});

export const moviesReducer = moviesSlice.reducer;
