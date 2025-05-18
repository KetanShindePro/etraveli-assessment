import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailedViewData } from "../../../store/reducers/detailedView/detailedView";
import { AppDispatch } from "../../../store";
import { selectDetailedViewData } from "../../../store/reducers/detailedView/detailedView";
import { OmdbMovie } from "../../../types/movie";
import "./detailedView.css";

export default function DetailedView() {
  const dispatch = useDispatch<AppDispatch>();
  const detailedViewData: OmdbMovie | null = useSelector(
    selectDetailedViewData
  );
  // console.log("DetailedView data: ", detailedViewData);

  useEffect(() => {
    dispatch(fetchDetailedViewData("Inception"));
  }, [dispatch]);

  if (!detailedViewData) {
    return <div className="detailed-view-container">Loading...</div>;
  }

  // Helper to render stars (out of 5)
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <span className="detailed-view-stars">
        {"★".repeat(fullStars)}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  // Calculate average rating (simulate if not available)
  let avgRating = 4; // fallback
  if (detailedViewData.imdbRating) {
    avgRating = Math.round((Number(detailedViewData.imdbRating) / 2) * 10) / 10;
  }

  // Ratings from sources
  const sources = detailedViewData.Ratings || [];

  return (
    <div className="detailed-view-container">
      <div className="detailed-view-header">
        {detailedViewData.Title && detailedViewData.Year
          ? `Episode III - ${detailedViewData.Title}`
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
          <div className="detailed-view-director">
            Directed by: {detailedViewData.Director}
          </div>
          <div className="detailed-view-rating">
            Average rating: {renderStars(avgRating)}
          </div>
          <div className="detailed-view-sources">
            {sources.map((src) => (
              <span key={src.Source} className="detailed-view-source">
                {src.Source}: {src.Value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
