import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SortBy from "../../components/common/sortBy";
import { setSortBy } from "../../store/reducers/searchSort";
import { SortByOptions } from "../../types/sortBy";

const mockStore = configureStore([]);

describe("SortBy component", () => {
  let store: ReturnType<typeof mockStore>;
  let initialState: any;

  beforeEach(() => {
    initialState = {
      searchSort: {
        sortBy: SortByOptions.TITLE,
      },
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it("renders select with correct default value from store", () => {
    render(
      <Provider store={store}>
        <SortBy />
      </Provider>
    );
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue(SortByOptions.TITLE);
  });

  it("renders all sort by options", () => {
    render(
      <Provider store={store}>
        <SortBy />
      </Provider>
    );
    Object.entries(SortByOptions).forEach(([key, value]) => {
      expect(
        screen.getByRole("option", { name: key.replace("_", " ") })
      ).toHaveValue(value);
    });
  });

  it("dispatches setSortBy when option is changed", () => {
    render(
      <Provider store={store}>
        <SortBy />
      </Provider>
    );
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: SortByOptions.RELEASE_DATE } });
    expect(store.dispatch).toHaveBeenCalledWith(
      setSortBy(SortByOptions.RELEASE_DATE)
    );
  });

  it("label is associated with select", () => {
    render(
      <Provider store={store}>
        <SortBy />
      </Provider>
    );
    const label = screen.getByText(/sort by:/i);
    const select = screen.getByRole("combobox");
    expect(label).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });
});
