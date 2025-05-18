import { useDispatch, useSelector } from "react-redux";
import {
  selectDetailedViewData,
  setDetailedViewData,
} from "../../../store/reducers/detailedView/detailedView";
import { OmdbMovie } from "../../../types/movie";
import "./detailedView.css";
import StarRating from "../starRating";
import { AppDispatch } from "../../../store";

export default function DetailedView() {
  const dispatch = useDispatch<AppDispatch>();
  const detailedViewData: OmdbMovie | null = useSelector(
    selectDetailedViewData
  );

  if (!detailedViewData) {
    return (
      <div className="detailed-view-container nothing-to-show">
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
    <div
      className="detailed-view-container"
      style={detailedViewData ? { display: "flex" } : undefined}
    >
      <button
        className="detailed-view-close-btn"
        onClick={() => dispatch(setDetailedViewData(null))}
      >
        ×
      </button>
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
