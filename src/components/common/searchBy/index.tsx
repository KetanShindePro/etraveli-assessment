import "./searchBy.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBy() {
  return (
    <div className="search-input-wrapper">
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search by title"
      />
    </div>
  );
}
