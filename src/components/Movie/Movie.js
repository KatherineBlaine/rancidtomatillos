import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ posterImg, title, rating, id, selectMovie }) => {
  return (
    <Link key={id} to={`/${id}`}>
      <div
        className="movie-card"
        id={id}
        onClick={() => {
          selectMovie(id);
          // selectVideo(id);
        }}
      >
        <img className="poster-img" id={`${title} img`} src={posterImg} alt="Movie poster"></img>
        <h3 className="movie-title" id={`${title} title`}>{title}</h3>
        <p id={`${title} rating`}>Rating: {rating}</p>
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
