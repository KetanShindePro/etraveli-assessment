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
            const rating = parseInt(movie.imdbRating);
            return (
              <MovieListItem
                key={`${movie.title}-${movie.episode_id}`}
                title={movie.title}
                episode={movie.episode_id}
                releaseDate={movie.release_date}
                rating={isNaN(rating) ? 0 : rating}
              />
            );
          })}
    </div>
  );
}
