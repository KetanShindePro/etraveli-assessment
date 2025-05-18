import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { SortByOptions } from "../../../types/sortBy";
import "./sortBy.css";
import { selectSortBy, setSortBy } from "../../../store/reducers/searchSort";

export default function SortBy() {
  const dispatch = useDispatch<AppDispatch>();
  const sortByValue = useSelector(selectSortBy);

  function renderSortByOptions() {
    return Object.entries(SortByOptions).map(([key, value]) => {
      return (
        <option key={key} value={value}>
          {key.replace("_", " ")}
        </option>
      );
    });
  }

  function handleSortByChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value as SortByOptions;
    dispatch(setSortBy(selectedValue));
  }

  return (
    <select
      className="sort-select"
      defaultValue={sortByValue}
      onChange={handleSortByChange}
    >
      {renderSortByOptions()}
    </select>
  );
}
