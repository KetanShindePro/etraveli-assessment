import { OmdbMovie } from "./movie";

export enum DataToPick {
  MOVIE = "movie",
}

export interface Pagination {
  count: number;
  next: number | null;
  previous: number | null;
  results: OmdbMovie[];
}

export enum RequestStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}
