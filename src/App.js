import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";

const Container = lazy(() =>
  import("./components/Container/Container" /* webpackChunkName: "container" */)
);
const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-detail-page" */
  )
);
const Cast = lazy(() =>
  import("./components/Cast/Cast" /* webpackChunkName: "cast" */)
);

const Reviews = lazy(() =>
  import("./components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<Container />}>
              <Route index element={<MoviesPage />} />
              <Route path=":movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
