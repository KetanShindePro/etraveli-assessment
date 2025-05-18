// write tests for the StarRating component
import { render, screen } from "@testing-library/react";
import StarRating from "../../components/common/starRating/index";

describe("StarRating", () => {
  it("fills the correct number of stars based on rating", () => {
    render(<StarRating rating={3} />);
    const filledStars = screen.getAllByTestId("filled-star");
    expect(filledStars.length).toBe(3);
  });

  it("renders a half-filled star for half ratings", () => {
    render(<StarRating rating={3.5} />);
    const halfFilledStars = screen.getAllByTestId("half-filled-star");
    expect(halfFilledStars.length).toBe(1);
  });

  it("displays the correct rating text", () => {
    render(<StarRating rating={4.5} />);
    const ratingText = screen.getByText(/4.5/i);
    expect(ratingText).toBeInTheDocument();
  });

  it("shows 'No Ratings Found' when rating is 0", () => {
    render(<StarRating rating={0} />);
    expect(screen.getByTestId("no-rating")).toBeInTheDocument();
  });

  it("shows 'No Ratings Found' when rating is undefined", () => {
    render(<StarRating />);
    expect(screen.getByTestId("no-rating")).toBeInTheDocument();
  });
});
