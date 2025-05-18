import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./searchBy.css";
import { FaSearch } from "react-icons/fa";
import { AppDispatch } from "../../../store";
import {
  selectSearchQuery,
  setSearchQuery,
} from "../../../store/reducers/searchSort";
import { useDebounce } from "../../../hooks/useDebounce";

export default function SearchBy() {
  const dispatch = useDispatch<AppDispatch>();
  const searchByTitle = useSelector(selectSearchQuery);

  const [inputValue, setInputValue] = useState(searchByTitle ?? "");
  const debouncedValue = useDebounce(inputValue, 300);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    if (debouncedValue !== searchByTitle) {
      dispatch(setSearchQuery(debouncedValue));
    }
  }, [debouncedValue, dispatch, searchByTitle]);

  return (
    <div className="search-input-wrapper">
      <FaSearch className="search-icon" data-testid="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search by title"
        value={inputValue}
        onChange={handleSearchChange}
      />
    </div>
  );
}
