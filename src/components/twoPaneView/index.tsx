import "./twoPaneView.css";
import DetailedView from "../common/detailedView";
import CustomList from "../common/list";
import TabbedNavigation from "../common/tabbedNavigation";
import SortBy from "../common/sortBy";
import SearchBy from "../common/searchBy";

export default function TwoPaneView() {
  return (
    <>
      <div className="tow-pane-view-container">
        <div className="sort-search-container">
          <SortBy />
          <SearchBy />
        </div>
        <div className="tow-pane-view">
          <CustomList />
          <TabbedNavigation>
            <DetailedView />
          </TabbedNavigation>
        </div>
      </div>
    </>
  );
}
