import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import DetailedView from "../../components/common/detailedView/index";

const mockStore = configureStore([]);

describe("DetailedView", () => {
  it("renders message when no movie is selected", () => {
    const store = mockStore({ detailedView: { data: null } });
    render(
      <Provider store={store}>
        <DetailedView />
      </Provider>
    );
    expect(screen.getByText(/please select the movie/i)).toBeInTheDocument();
  });

  it("renders movie details when movie is selected", () => {
    const movie = {
      Title: "Test Movie",
      title: "Test Movie",
      Year: "2020",
      imdbRating: "7.5",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.5/10" },
        { Source: "Rotten Tomatoes", Value: "90%" },
      ],
      Director: "Test Director",
      Plot: "Test plot.",
      Poster: "test.jpg",
      Rated: "PG",
      Released: "2020-01-01",
      Runtime: "120 min",
      Genre: "Drama",
      Writer: "Test Writer",
      Actors: "Test Actor",
      Language: "English",
      Country: "Testland",
      Awards: "None",
      Metascore: "80",
      imdbVotes: "1000",
      Type: "movie",
      DVD: "2020-01-01",
      BoxOffice: "N/A",
      Production: "Test Production",
      Website: "N/A",
      Response: "True",
      episode_id: 1,
      opening_crawl: "...",
      director: "Test Director",
      producer: "Test Producer",
      release_date: "2020-01-01",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: "2020-01-01",
      edited: "2020-01-01",
      url: "http://test.movie",
    };
    const store = mockStore({
      detailedView: { data: { ...movie } },
    });
    render(
      <Provider store={store}>
        <DetailedView />
      </Provider>
    );
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("Directed by: Test Director")).toBeInTheDocument();
    expect(screen.getByAltText("Test Movie")).toBeInTheDocument();
    expect(
      screen.getByText("Internet Movie Database: 7.5/10")
    ).toBeInTheDocument();
    expect(screen.getByText("Rotten Tomatoes: 90%")).toBeInTheDocument();
  });
});
