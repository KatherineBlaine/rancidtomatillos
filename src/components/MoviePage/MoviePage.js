import React from "react";
import PropTypes from "prop-types";
import "./MoviePage.css";
import { Link } from "react-router-dom";

const MoviePage = ({ movie }) => {
  return (
    <main>
      <Link to="/" className="home-btn">
        Go Back
      </Link>
      <div className="movie-page">
        <div className="left-content">
          <p>This is the ID: {movie.movie.id}</p>
          <img src={movie.movie.poster_path} alt="Movie poster"></img>
        </div>
        <div className="right-content">
          <h3>{movie.movie.title}</h3>
          <p>{movie.movie.average_rating}</p>
          <p>{movie.movie.release_date}</p>
          <p>{movie.movie.overview}</p>
          <p>{movie.movie.genres}</p>
          <p>{movie.movie.budget}</p>
          <p>{movie.movie.revenue}</p>
          <p>{movie.movie.runtime}</p>
          <p>{movie.movie.tagline}</p>
        </div>
      </div>
    </main>
  );
};

export default MoviePage;

MoviePage.propTypes = {
  movie: PropTypes.object,
};
