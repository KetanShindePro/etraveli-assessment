import "./twoPaneView.css";
import DetailedView from "../common/detailedView";
import CustomList from "../common/list";
import SortBy from "../common/sortBy";
import SearchBy from "../common/searchBy";

export default function TwoPaneView() {
  return (
    <>
      <div
        className="two-pane-view-container"
        data-testid="two-pane-view-container"
      >
        <div
          className="sort-search-container"
          data-testid="sort-search-container"
        >
          <SortBy />
          <SearchBy />
        </div>
        <div className="two-pane-view" data-testid="two-pane-view">
          <CustomList />
          <DetailedView />
        </div>
      </div>
    </>
  );
}
