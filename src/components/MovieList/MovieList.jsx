import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function MovieList({ array, path }) {
  const location = useLocation();
  return (
    <ul>
      {array.map((movie) => (
        <li key={movie.id}>
          <NavLink to={`${path ?? ""}${movie.id}`} state={{ from: location }}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

//PropTypes
MovieList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
  path: PropTypes.string, //Не обязательный
};
