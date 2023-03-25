import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";

const Movie = ({ posterImg, title, rating, viewChange }) => {
  return (
    <div className="movie-card" onClick={viewChange}>
      <img className="poster-img" src={posterImg} alt="Movie poster"></img>
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Movie;

Movie.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  viewChange: PropTypes.func,
};
