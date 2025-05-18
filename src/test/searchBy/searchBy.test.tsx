import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchBy from "../../components/common/searchBy";

const mockStore = configureStore([]);

describe("SearchBy component", () => {
  let store: ReturnType<typeof mockStore>;
  let initialState: any;

  beforeEach(() => {
    initialState = {
      searchSort: {
        searchQuery: "initial query",
      },
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it("renders input with initial value from store", () => {
    render(
      <Provider store={store}>
        <SearchBy />
      </Provider>
    );
    const input = screen.getByPlaceholderText("Search by title");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("initial query");
  });

  it("updates input value on change", () => {
    render(
      <Provider store={store}>
        <SearchBy />
      </Provider>
    );
    const input = screen.getByPlaceholderText("Search by title");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input).toHaveValue("new value");
  });

  it("shows the search icon", () => {
    render(
      <Provider store={store}>
        <SearchBy />
      </Provider>
    );
    const icon = screen.getByTestId("search-icon");
    expect(icon).toBeInTheDocument();
  });
});
