import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ posterImg, title, rating, id, viewChange }) => {
  return (
    <Link to={`/${id}`}>
      <div className="movie-card" id={id} onClick={() => viewChange(id, title)}>
        <img className="poster-img" src={posterImg} alt="Movie poster"></img>
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
      </div>
    </Link>
  );
};

export default Movie;

Movie.propTypes = {
  posterImg: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  viewChange: PropTypes.func,
};
