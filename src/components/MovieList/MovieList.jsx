import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function MovieList({ array, path }) {
  return (
    <ul>
      {array.map((movie) => (
        <li key={movie.id}>
          <NavLink to={`${path ?? ""}${movie.id}`}>{movie.title}</NavLink>
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
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  path: PropTypes.string, //Не обязательный
};
