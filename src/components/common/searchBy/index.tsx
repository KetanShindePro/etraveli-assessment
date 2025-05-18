import React, { useState, useDeferredValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./searchBy.css";
import { FaSearch } from "react-icons/fa";
import { AppDispatch } from "../../../store";
import {
  selectSearchQuery,
  setSearchQuery,
} from "../../../store/reducers/searchSort";

export default function SearchBy() {
  const dispatch = useDispatch<AppDispatch>();
  const searchByTitle = useSelector(selectSearchQuery);

  const [inputValue, setInputValue] = useState(searchByTitle ?? "");
  const deferredValue = useDeferredValue(inputValue);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    if (deferredValue !== searchByTitle) {
      dispatch(setSearchQuery(deferredValue));
    }
  }, [deferredValue, dispatch, searchByTitle]);

  return (
    <div className="search-input-wrapper">
      <FaSearch className="search-icon" />
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
