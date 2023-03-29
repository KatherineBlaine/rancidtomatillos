import React from "react";
import PropTypes from "prop-types";
import "./MoviePage.css";
import { Link, useParams } from "react-router-dom";

const MoviePage = ({movie}) => {
  console.log(movie)
  if (movie !== null) {
    console.log(movie.movie.poster_path)
    return (
      <main>

        <div className="movie-page">
          <div className="left-content">
            <h2>{movie.movie.title}</h2>
            <img src={movie.movie.poster_path} alt="Movie poster"></img>
            <img src={movie.movie.backdrop_path} alt="Movie poster"></img>
          </div>
          <div className="right-content">
          <p>{movie.movie.release_date}</p>
            <p>{movie.movie.overview}</p>
            <p>{movie.movie.genres}</p>
            <p>{movie.movie.budget}</p>
            <p>{movie.movie.revenue}</p>
            <p>{movie.movie.runtime}</p>
            <p>{movie.movie.tagline}</p>
            <p>{movie.movie.average_rating}</p>
          </div>
        </div>
      </main>
    );
  }
};

export default MoviePage;

MoviePage.propTypes = {
  movie: PropTypes.object,
};
