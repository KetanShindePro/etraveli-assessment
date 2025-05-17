import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import DetailedMovieView from "./page/detailedMovieView";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={() => <DetailedMovieView />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
