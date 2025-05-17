import TwoPaneView from "../../components/twoPaneView";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../types/storeState";
import { fetchMovies } from "../../store/reducers/movies";
import { useEffect } from "react";
import { AppDispatch } from "../../store";

export default function DetailedMovieView() {
  const dispatch = useDispatch<AppDispatch>();
  const fetchStatus = useSelector((state: StoreState) => state?.movies?.status);

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [fetchStatus, dispatch]);

  return <TwoPaneView />;
}
