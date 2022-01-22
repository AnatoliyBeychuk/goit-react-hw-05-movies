import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MoviesAPI from "../../MoviesAPI/MoviesAPI";
import {
  Container,
  MovieContainer,
  MoviDetailContainer,
  GenresContainer,
  Genre,
  MoviImg,
  AdditionalContainer,
} from "./MovieDetailsPage.styled";

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const { movieId } = params;
    loadMoviemDetail(movieId);
  }, [params]);

  useEffect(() => {
    if (movie)
      setScore(Math.round((movie.vote_count * 100) / movie.popularity));
  }, [movie]);

  function loadMoviemDetail(movieId) {
    MoviesAPI.getMovieDetailsById(movieId)
      .then((data) => {
        if (!data) {
          return Promise.reject(
            new Error("Не удалось загрузить информацию о фильме :(")
          );
        }
        setMovie(data);
      })
      .catch((error) => setError(error));
  }

  return (
    <Container>
      {error ? (
        <h1>{error.message}</h1>
      ) : (
        <>
          <button type="button" name="goBack" onClick={() => navigate("/")}>
            Go Back
          </button>
          <MovieContainer>
            <MoviImg
              src={
                movie?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                  : "https://via.placeholder.com/294x441/808080/545454&text=NO POSTER :("
              }
              alt={movie?.tagline}
            />
            <MoviDetailContainer>
              {<h1>{movie?.title}</h1>}
              <p>User score {score}%</p>
              <h2>Overview</h2>
              <p>{movie?.overview}</p>
              <h2>Genres</h2>
              <GenresContainer>
                {movie?.genres.map((genre) => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
              </GenresContainer>
            </MoviDetailContainer>
          </MovieContainer>

          <h3>Additional Information</h3>
          <AdditionalContainer>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </AdditionalContainer>
          <Outlet />
        </>
      )}
    </Container>
  );
}

export default MovieDetailsPage;
