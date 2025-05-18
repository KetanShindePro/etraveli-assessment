import "./listItem.css";
import { MAX_STARS } from "../../../constants";
import { intToRoman } from "../../../util/intToRoman";
import StarRating from "../starRating";

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
      <StarRating rating={rating} />
      <div className="date">{releaseDate}</div>
    </div>
  );
};

export default MovieListItem;
