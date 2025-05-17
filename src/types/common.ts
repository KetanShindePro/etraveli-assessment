import { Movie } from "./storeState";

export enum DataToPick {
  MOVIE = "movie",
}

export interface Pagination {
  count: number;
  next: number | null;
  previous: number | null;
  results: Movie[];
}
