import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div class="movie">
      <img class="movie__poster" src={poster} alt={title} />
      <div class="movie__title">{title}</div>
      <div clas="movie__year">{year}</div>
      <div class="movie__summary">{summary}</div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
