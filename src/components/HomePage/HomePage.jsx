import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MoviesAPI from "../../MoviesAPI/MoviesAPI";
function HomePage() {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
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
      <ul>
        {trending.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
