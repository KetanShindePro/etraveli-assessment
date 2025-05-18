import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { MoviesState } from "../../../types/storeState";
import { Pagination, RequestStatus } from "../../../types/common";
import { OmdbMovie } from "../../../types/movie";

const initialState: MoviesState = {
  status: RequestStatus.IDLE,
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  error: null,
};

export const fetchOmdbMovie = createAsyncThunk<
  OmdbMovie,
  string,
  { rejectValue: string }
>("movies/fetchOmdbMovie", async (movieName: string, thunkAPI) => {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${movieName}&apikey=f5082463`
  );
  const data = await response.json();
  if (response.ok) {
    return data as OmdbMovie;
  } else {
    return thunkAPI.rejectWithValue("Failed to fetch Movies");
  }
});

export const fetchMovies = createAsyncThunk<
  Pagination,
  void,
  { rejectValue: string }
>("movies/fetchMovies", async (_, thunkAPI) => {
  try {
    console.log("Fetching movies...");
    const response = await fetch("https://swapi.py4e.com/api/films");
    const data = await response.json();
    console.log("Movies fetched successfully:", data);

    if (data.results) {
      data.results.forEach((movie: any) => {
        thunkAPI.dispatch(fetchOmdbMovie(movie.title));
      });
    }

    return data as Pagination;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch Movies");
  }
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
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
    builder.addCase(fetchOmdbMovie.fulfilled, (state, action) => {
      state.status = RequestStatus.SUCCEEDED;
      const foundIndex = state.data.results.findIndex((movie) => {
        return action.payload.Title.includes(movie.title);
      });

      if (foundIndex !== -1) {
        state.data.results[foundIndex] = {
          ...state.data.results[foundIndex],
          ...action.payload,
        };
      }
    });
    builder.addCase(fetchOmdbMovie.rejected, (state, action) => {
      state.status = RequestStatus.FAILED;
      state.error = action.payload;
    });
  },
});

export const moviesReducer = moviesSlice.reducer;

export const selectMovies = (state: { movies: MoviesState }) => state.movies;

export const selectMovieByTitle = (
  state: { movies: MoviesState },
  title: string
) => state.movies.data.results.find((movie) => movie.Title.includes(title));
