import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Loader from "./components/Loader/Loader";

const App = lazy(() => import("./App" /* webpackChunkName: "app" */));
const Container = lazy(() =>
  import("./components/Container/Container" /* webpackChunkName: "container" */)
);
const HomePage = lazy(() =>
  import("./components/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import(
    "./components/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-detail-page" */
  )
);
const Cast = lazy(() =>
  import("./components/Cast/Cast" /* webpackChunkName: "cast" */)
);

const Reviews = lazy(() =>
  import("./components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="movies/" element={<Container />}>
              <Route index element={<MoviesPage />} />
              <Route path=":movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
