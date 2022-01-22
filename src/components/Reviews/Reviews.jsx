import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesAPI from "../../MoviesAPI/MoviesAPI";

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  let params = useParams();

  useEffect(() => {
    const { movieId } = params;
    loadMovieReviews(movieId);
  }, [params]);

  function loadMovieReviews(movieId) {
    MoviesAPI.getMovieReviews(movieId)
      .then((data) => {
        if (!data) {
          return Promise.reject(
            new Error("Не удалось загрузить список актеров! :(")
          );
        }
        setReviews(data.results);
      })
      .catch((error) => setError(error));
  }

  return (
    <>
      <h1>{error?.message}</h1>
      <p>
        {reviews?.length === 0 && "We don't have any reviews for this movie."}
      </p>
      <ul>
        {reviews?.map((review) => {
          return (
            <li key={review.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${review?.author_details.avatar_path}`}
                width="50"
                height="50"
                alt={review?.author}
              />
              <h3>{review.author}</h3>
              <p>{review.content}</p>
              <p>Created at: {review.created_at}</p>
              <p>Updated at: {review.updated_at}</p>
              <p>Rating: {review.rating ?? "no rating"}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Reviews;
