import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { searchSortReducer } from "./searchSort";

export default combineReducers({
  movies: moviesReducer,
  searchSort: searchSortReducer,
});
