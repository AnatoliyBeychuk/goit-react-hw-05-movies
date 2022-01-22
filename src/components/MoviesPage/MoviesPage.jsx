import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MoviesAPI from "../../MoviesAPI/MoviesAPI";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("query") || "");

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) search(query);
  }, [searchParams]);

  function search(query) {
    MoviesAPI.searchMovies(query)
      .then((data) => {
        if (data.results.length === 0) {
          return Promise.reject(new Error("Ничего не найдено :("));
        }
        setMovies(data.results);
      })
      .catch((error) => setError(error));
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (query) {
            setSearchParams({ query });
          } else {
            setSearchParams({});
          }
          setMovies([]);
          setError(null);
        }}
      >
        <input
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie title..."
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}
        />

        <button type="submit" aria-label="Search" disabled={query === ""}>
          Search
        </button>
      </form>
      {<h1>{error?.message}</h1>}
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <NavLink to={`${movie.id}`}>{movie.title}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}

export default MoviesPage;
