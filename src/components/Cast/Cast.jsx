import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesAPI from "../../MoviesAPI/MoviesAPI";
function Cast() {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  let params = useParams();

  useEffect(() => {
    const { movieId } = params;
    loadMovieCast(movieId);
  }, [params]);

  function loadMovieCast(movieId) {
    MoviesAPI.getMovieCast(movieId)
      .then((data) => {
        if (!data) {
          return Promise.reject(
            new Error("Не удалось загрузить список актеров! :(")
          );
        }
        setCast(data.cast);
      })
      .catch((error) => setError(error));
  }

  return (
    <>
      <h1>{error?.message}</h1>
      <p>{cast?.length === 0 && "We don't have any casts for this movie."}</p>
      <ul>
        {cast?.map((actor) => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`}
                width="100"
                height="150"
                alt={actor?.name}
              />
              <p>{actor.name}</p>
              <p>{`Character: ${actor.character}`}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cast;
