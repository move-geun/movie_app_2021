import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: { year, title, summary, poster, genres },
      }}
    >
      <div className="movie">
        <img className="movie__poster" src={poster} alt={title} />
        <div className="movie__data">
          <div className="movie__title">{title}</div>
          <div className="movie__year">{year}</div>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <div className="movie__summary">{summary.slice(0, 140)}...</div>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
