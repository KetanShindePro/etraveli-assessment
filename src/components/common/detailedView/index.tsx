import { useSelector } from "react-redux";
import { selectDetailedViewData } from "../../../store/reducers/detailedView/detailedView";
import { OmdbMovie } from "../../../types/movie";
import "./detailedView.css";
import StarRating from "../starRating";

export default function DetailedView() {
  const detailedViewData: OmdbMovie | null = useSelector(
    selectDetailedViewData
  );

  if (!detailedViewData) {
    return (
      <div className="detailed-view-container">
        Please select the movie from the list to view full details.
      </div>
    );
  }

  let avgRating = 0;
  if (detailedViewData.imdbRating) {
    const rating = Number(detailedViewData.imdbRating);
    avgRating = isNaN(rating) ? 0 : rating;
  }

  const sources = detailedViewData.Ratings || [];

  return (
    <div className="detailed-view-container">
      <div className="detailed-view-header">
        {detailedViewData.Title && detailedViewData.Year
          ? `${detailedViewData.Title}`
          : detailedViewData.Title}
      </div>
      <div className="detailed-view-content">
        <img
          className="detailed-view-poster"
          src={detailedViewData.Poster}
          alt={detailedViewData.Title}
        />
        <div className="detailed-view-info">
          <div className="detailed-view-plot">{detailedViewData.Plot}</div>
        </div>
      </div>
      <div className="detailed-view-director">
        Directed by: {detailedViewData.Director}
      </div>
      <div className="detailed-view-rating">
        Average rating: <StarRating rating={avgRating} />
      </div>
      <div className="detailed-view-sources">
        {sources.map((src) => (
          <span key={src.Source} className="detailed-view-source">
            {src.Source}: {src.Value}
          </span>
        ))}
      </div>
    </div>
  );
}
