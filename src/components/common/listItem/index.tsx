import "./listItem.css";
import { intToRoman } from "../../../util/intToRoman";
import StarRating from "../starRating";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setDetailedViewData } from "../../../store/reducers/detailedView/detailedView";
import { OmdbMovie } from "../../../types/movie";

interface MovieListItemProps {
  movie: OmdbMovie;
}

const MovieListItem = ({ movie }: MovieListItemProps) => {
  const { title, episode_id, imdbRating, release_date } = movie;
  const dispatch = useDispatch<AppDispatch>();
  const rating = Number(imdbRating);
  const ratingNumber = isNaN(rating) ? 0 : rating;

  return (
    <div
      className="list-item"
      onClick={() => dispatch(setDetailedViewData(movie))}
    >
      <div className="title-and-episode">
        <div className="episode">EPISODE {episode_id}</div>
        <div className="title">{`EPISODE ${intToRoman(
          episode_id
        )} - ${title}`}</div>
      </div>
      <StarRating rating={ratingNumber} />
      <div className="date">{release_date}</div>
    </div>
  );
};

export default MovieListItem;
