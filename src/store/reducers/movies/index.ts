import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { MoviesState, StoreState } from "../../../types/storeState";
import { Pagination, RequestStatus } from "../../../types/common";
import { OmdbMovie } from "../../../types/movie";
import { SortByOptions, SortOrder } from "../../../types/sortBy";

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
    const response = await fetch("https://swapi.py4e.com/api/films");
    const data = await response.json();

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

export const selectSortedFilteredMovies = (state: StoreState) => {
  const { sortBy, sortOrder, searchQuery } = state.searchSort;

  let filteredResults = state.movies.data.results.filter((movie) => {
    if (!searchQuery) return true;
    const movieTitle = movie.title || movie.Title || "";
    return movieTitle.toLowerCase().includes(searchQuery.toLowerCase());
  });

  let sortedResults = [...filteredResults];

  if (sortBy === SortByOptions.TITLE) {
    sortedResults.sort((a, b) => {
      const titleA = (a.title || a.Title || "").toLowerCase();
      const titleB = (b.title || b.Title || "").toLowerCase();
      return titleA.localeCompare(titleB);
    });
  } else if (sortBy === SortByOptions.RELEASE_DATE) {
    sortedResults.sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return sortOrder === SortOrder.ASCENDING
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
  } else if (sortBy === SortByOptions.RATING) {
    sortedResults.sort((a, b) => {
      const tryRatingA = Number(a.imdbRating);
      const tryRatingB = Number(b.imdbRating);
      const ratingA = isNaN(tryRatingA) ? 0 : tryRatingA;
      const ratingB = isNaN(tryRatingB) ? 0 : tryRatingB;
      return sortOrder === SortOrder.ASCENDING
        ? ratingA - ratingB
        : ratingB - ratingA;
    });
  } else if (sortBy === SortByOptions.EPISODE) {
    sortedResults.sort((a, b) => {
      const tryEpisodeA = Number(a.episode_id);
      const tryEpisodeB = Number(b.episode_id);
      const episodeA = isNaN(tryEpisodeA) ? 0 : tryEpisodeA;
      const episodeB = isNaN(tryEpisodeB) ? 0 : tryEpisodeB;
      return sortOrder === SortOrder.ASCENDING
        ? episodeA - episodeB
        : episodeB - episodeA;
    });
  }

  return {
    ...state.movies,
    data: {
      ...state.movies.data,
      results: sortedResults,
    },
  };
};

export const selectMovieByTitle = (state: StoreState, title: string) =>
  state.movies.data.results.find((movie) => movie.Title.includes(title));
