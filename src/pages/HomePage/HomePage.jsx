import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesAPI from "../../MoviesAPI/MoviesAPI";
import MovieList from "../../components/MovieList/MovieList";

function HomePage() {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/"); //исправить тут!!!
    loadTrendingMovies();
  }, [navigate]);

  function loadTrendingMovies() {
    MoviesAPI.getTrendingMovies()
      .then((data) => {
        setTrending(data.results);
      })
      .catch((error) => setError(error));
  }

  return (
    <>
      <h1>{error?.message ?? "Trending today"}</h1>
      <MovieList path="movies/" array={trending} />
    </>
  );
}

export default HomePage;
