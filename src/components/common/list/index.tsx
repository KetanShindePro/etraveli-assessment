import { useSelector } from "react-redux";
import MovieListItem from "../listItem";
import "./list.css";
import { RequestStatus } from "../../../types/common";
import { selectMovies } from "../../../store/reducers/movies";

export default function CustomList() {
  const { data, status, error } = useSelector(selectMovies);

  return (
    <div className="movie-list-container">
      {status === RequestStatus.LOADING
        ? "Loading..."
        : error
        ? error
        : data.results.map((movie) => {
            return (
              <MovieListItem
                key={`${movie.title}-${movie.episode_id}`}
                movie={movie}
              />
            );
          })}
    </div>
  );
}
