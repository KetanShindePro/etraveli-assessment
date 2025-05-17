import "./listItem.css";
import { MAX_STARS } from "../../../constants";
import { intToRoman } from "../../../util/intToRoman";

interface MovieListItemProps {
  episode: number;
  title: string;
  releaseDate: string;
  rating?: number;
}

const MovieListItem = ({
  episode,
  title,
  releaseDate,
  rating = 2.5,
}: MovieListItemProps) => {
  return (
    <div className="list-item">
      <div className="episode">EPISODE {episode}</div>
      <div className="title">{`EPISODE ${intToRoman(episode)} - ${title}`}</div>
      <div className="rating">
        <span className="rating-text">{rating ? rating : "N/A"}</span>
        {Array.from({ length: MAX_STARS }).map((_, i) => {
          if (i + 1 <= Math.floor(rating)) {
            return (
              <span key={i} className="star filled">
                ★
              </span>
            );
          } else if (
            i < rating &&
            rating % 1 >= 0.5 &&
            i === Math.floor(rating)
          ) {
            return (
              <span key={i} className="star half-filled">
                ★
              </span>
            );
          } else {
            return (
              <span key={i} className="star">
                ★
              </span>
            );
          }
        })}
      </div>
      <div className="date">{releaseDate}</div>
    </div>
  );
};

export default MovieListItem;
