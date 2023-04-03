import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ posterImg, title, rating, id, selectMovie }) => {
  return (
    <div className="movie-card">
      <Link key={id} to={`/${id}`}>
        <div
          id={id}
          onClick={() => {
            selectMovie(id);
          }}
        >
          <img className="poster-img" id={`${title} img`} src={posterImg} alt="Movie poster"></img>
          <h2 className="movie-title" id={`${title} title`}>{title}</h2>
          <p id={`${title} rating`}>Rating: {rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;

Movie.propTypes = {
  posterImg: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  viewChange: PropTypes.func,
};
