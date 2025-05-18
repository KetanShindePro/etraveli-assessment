import { useSelector } from "react-redux";
import { StoreState } from "../../../types/storeState";
import MovieListItem from "../listItem";
import "./list.css";
import { RequestStatus } from "../../../types/common";

export default function CustomList() {
  const { data, status, error } = useSelector(
    (state: StoreState) => state.movies
  );

  return (
    <div className="movie-list-container">
      {status === RequestStatus.LOADING
        ? "Loading..."
        : error
        ? error
        : data.results.map((movie) => (
            <MovieListItem
              key={`${movie.title}-${movie.episode_id}`}
              title={movie.title}
              episode={movie.episode_id}
              releaseDate={movie.release_date}
            />
          ))}
    </div>
  );
}
