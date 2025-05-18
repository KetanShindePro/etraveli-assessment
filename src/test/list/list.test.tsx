import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CustomList from "../../components/common/list";
import { RequestStatus } from "../../types/common";

const mockStore = configureStore([]);

describe("CustomList", () => {
  it("renders loading state", () => {
    const store = mockStore({
      movies: {
        data: { results: [{}, {}] },
        status: RequestStatus.LOADING,
        error: null,
      },
      searchSort: {
        sortBy: "title",
        sortOrder: "asc",
        searchQuery: "",
      },
    });
    render(
      <Provider store={store}>
        <CustomList />
      </Provider>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders error state", () => {
    const store = mockStore({
      movies: {
        data: { results: [{}, {}] },
        status: RequestStatus.FAILED,
        error: "Something went wrong",
      },
      searchSort: {
        sortBy: "title",
        sortOrder: "asc",
        searchQuery: "",
      },
    });
    render(
      <Provider store={store}>
        <CustomList />
      </Provider>
    );
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("renders no results message", () => {
    const store = mockStore({
      movies: {
        data: { results: [] },
        status: RequestStatus.SUCCEEDED,
        error: null,
      },
      searchSort: {
        sortBy: "title",
        sortOrder: "asc",
        searchQuery: "",
      },
    });
    render(
      <Provider store={store}>
        <CustomList />
      </Provider>
    );
    expect(screen.getByText(/no results found/i)).toBeInTheDocument();
  });

  it("renders movie list items", () => {
    const store = mockStore({
      movies: {
        data: {
          results: [
            { title: "A New Hope", episode_id: 4 },
            { title: "The Empire Strikes Back", episode_id: 5 },
          ],
        },
        status: RequestStatus.SUCCEEDED,
        error: null,
      },
      searchSort: {
        sortBy: "title",
        sortOrder: "asc",
        searchQuery: "",
      },
    });
    render(
      <Provider store={store}>
        <CustomList />
      </Provider>
    );
    expect(screen.getByText(/a new hope/i)).toBeInTheDocument();
    expect(screen.getByText(/the empire strikes back/i)).toBeInTheDocument();
  });
});
