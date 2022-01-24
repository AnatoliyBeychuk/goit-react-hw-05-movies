import { Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MoviesAPI from "../../MoviesAPI/MoviesAPI";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

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

  const handleChangeQuery = (query) => {
    setQuery(query);
  };

  const handleChangeSearchParams = (query) => {
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
    setMovies([]);
    setError(null);
  };

  return (
    <>
      <SearchForm
        query={query}
        onQueryChange={handleChangeQuery}
        onSearchParamsChange={handleChangeSearchParams}
      />
      {<h1>{error?.message}</h1>}
      <MovieList array={movies} />
      <Outlet />
    </>
  );
}

export default MoviesPage;
