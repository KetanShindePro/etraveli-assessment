import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieListItem from "../../components/common/listItem";
import { OmdbMovie } from "../../types/movie";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import * as detailedViewActions from "../../store/reducers/detailedView/detailedView";

const mockStore = configureMockStore();

describe("MovieListItem", () => {
  const movie: OmdbMovie = {
    title: "A New Hope",
    episode_id: 4,
    imdbRating: "8.6",
    release_date: "1977-05-25",
  } as OmdbMovie;

  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  it("renders the movie title and episode in roman numerals", () => {
    render(
      <Provider store={store}>
        <MovieListItem movie={movie} />
      </Provider>
    );
    expect(screen.getByText("EPISODE IV - A New Hope")).toBeInTheDocument();
  });

  it("renders the episode number", () => {
    render(
      <Provider store={store}>
        <MovieListItem movie={movie} />
      </Provider>
    );
    expect(screen.getByText("EPISODE 4")).toBeInTheDocument();
  });

  it("renders the release date", () => {
    render(
      <Provider store={store}>
        <MovieListItem movie={movie} />
      </Provider>
    );
    expect(screen.getByText("1977-05-25")).toBeInTheDocument();
  });

  it("renders the StarRating component with correct rating", () => {
    render(
      <Provider store={store}>
        <MovieListItem movie={movie} />
      </Provider>
    );
    expect(screen.getByText("EPISODE IV - A New Hope")).toBeInTheDocument();
  });

  it("dispatches setDetailedViewData when clicked", () => {
    const spy = jest.spyOn(detailedViewActions, "setDetailedViewData");
    render(
      <Provider store={store}>
        <MovieListItem movie={movie} />
      </Provider>
    );
    fireEvent.click(screen.getByText("EPISODE IV - A New Hope"));
    expect(spy).toHaveBeenCalledWith(movie);
    spy.mockRestore();
  });

  it("handles invalid imdbRating gracefully", () => {
    const badMovie = { ...movie, imdbRating: "N/A" };
    render(
      <Provider store={store}>
        <MovieListItem movie={badMovie} />
      </Provider>
    );
    expect(screen.getByText("EPISODE IV - A New Hope")).toBeInTheDocument();
  });
});
