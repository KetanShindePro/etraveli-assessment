import { useSelector } from "react-redux";
import MovieListItem from "../listItem";
import "./list.css";
import { RequestStatus } from "../../../types/common";
import { selectSortedFilteredMovies } from "../../../store/reducers/movies";

export default function CustomList() {
  const { data, status, error } = useSelector(selectSortedFilteredMovies);

  return (
    <div className="movie-list-container">
      {data.results.length ? (
        status === RequestStatus.LOADING ? (
          "Loading..."
        ) : error ? (
          error
        ) : (
          data.results.map((movie) => {
            return (
              <MovieListItem
                key={`${movie.title}-${movie.episode_id}`}
                movie={movie}
              />
            );
          })
        )
      ) : (
        <div className="no-results">No results found</div>
      )}
    </div>
  );
}
