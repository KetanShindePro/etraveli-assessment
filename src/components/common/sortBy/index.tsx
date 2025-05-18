import { SortByOptions } from "../../../types/sortBy";
import "./sortBy.css";

export default function SortBy() {
  function renderSortByOptions() {
    return Object.entries(SortByOptions).map(([key, value]) => {
      return (
        <option key={key} value={value}>
          {key.replace("_", " ")}
        </option>
      );
    });
  }

  return (
    <select className="sort-select" defaultValue="">
      <option value="" disabled hidden>
        Select to sort
      </option>
      {renderSortByOptions()}
    </select>
  );
}
