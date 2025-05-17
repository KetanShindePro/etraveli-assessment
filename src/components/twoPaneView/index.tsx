import DetailedView from "../common/detailedView";
import CustomList from "../common/list";
import TabbedNavigation from "../common/tabbedNavigation";

export default function TwoPaneView() {
  return (
    <>
      <CustomList />
      <TabbedNavigation>
        <DetailedView />
      </TabbedNavigation>
    </>
  );
}
