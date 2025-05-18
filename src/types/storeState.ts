import { Pagination, RequestStatus } from "./common";

export interface MoviesState {
  data: Pagination;
  status: RequestStatus;
  error: string | null | undefined;
}

export interface DetailedViewState {
  status: RequestStatus;
  data: any | null;
  error: string | null | undefined;
}

export interface SearchSortState {
  sortBy: string | undefined;
  sortOrder: string | undefined;
  searchQuery: string | undefined;
}

export interface StoreState {
  movies: MoviesState;
  searchSort: SearchSortState;
  detailedView: DetailedViewState;
}
