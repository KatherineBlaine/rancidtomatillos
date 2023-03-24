import React from "react";
import "./Movie.css";
import PropTypes from 'prop-types'

const Movie = ({ title, rating, viewChange}) => {
  return (
    <div className="movie-card" onClick={viewChange}>
      <h3>{title}</h3>
      <p>{rating}</p>
    </div>
  );
};

export default Movie;

Movie.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  viewChange: PropTypes.func,
}
