import { MAX_STARS } from "../../../constants";
import "./starRating.css";

export interface StarRatingProps {
  rating?: number;
}

export default function StarRating({ rating = 0 }: StarRatingProps) {
  function renderStars() {
    return (
      <>
        <span className="rating-text">{rating ? rating : "NR"}</span>
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
      </>
    );
  }

  return (
    <div className="rating">
      {rating ? (
        renderStars()
      ) : (
        <span className="no-rating">No Ratings Found</span>
      )}
    </div>
  );
}
