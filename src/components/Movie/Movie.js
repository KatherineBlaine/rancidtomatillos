import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ posterImg, title, rating, id, selectMovie }) => {
  return (
    <Link key={id} to={`/${id}`}>
      <div className="movie-card" id={id} onClick={() => selectMovie(id)}>
        <img className="poster-img" src={posterImg} alt="Movie poster"></img>
        <h3 className="movie-title">{title}</h3>
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
