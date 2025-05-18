import { render, screen } from "@testing-library/react";
import TwoPaneView from "../../components/twoPaneView/index";
import { Provider } from "react-redux";
import store from "../../store";

// Utility to render with redux provider
const renderWithProvider = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe("TwoPaneView", () => {
  it("renders the two-pane-view-container", () => {
    renderWithProvider(<TwoPaneView />);
    expect(screen.getByTestId("two-pane-view-container")).toBeInTheDocument();
  });

  it("renders SortBy and SearchBy components", () => {
    renderWithProvider(<TwoPaneView />);
    expect(screen.getByTestId("sort-search-container")).toBeInTheDocument();
  });

  it("renders CustomList and DetailedView components", () => {
    renderWithProvider(<TwoPaneView />);
    expect(screen.getByTestId("two-pane-view")).toBeInTheDocument();
  });
});
