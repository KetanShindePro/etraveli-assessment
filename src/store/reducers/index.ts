import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { searchSortReducer } from "./searchSort";
import { detailedViewReducer } from "./detailedView/detailedView";

export default combineReducers({
  movies: moviesReducer,
  searchSort: searchSortReducer,
  detailedView: detailedViewReducer,
});
