import React from "react";
import PropTypes from "prop-types";
import "./MoviePage.css";
import NoMatch from "../NoMatch";

const MoviePage = ({ movie }) => {
  if (movie !== null) {
    return (
      <main>
        <div className="movie-page">
          <div className="left-content">
            <img src={movie.movie.poster_path} alt="Movie poster"></img>
          </div>
          <div className="right-content">
            <h2>{movie.movie.title}</h2>
            <div className="container">
              <p className="tagline">"{movie.movie.tagline}"</p>
              <p>{movie.movie.overview}</p>
            </div>

            <div className="container">
              <p>Release: {movie.movie.release_date}</p>
              <br />
              <p>Length: {movie.movie.runtime} min</p>
              <br />
              <p>Genres: {movie.movie.genres.join(", ")}</p>
            </div>

            <div className="detail-cards-container">
              <div className="detail-card">
                <p>Budget</p>
                <p>${movie.movie.budget.toLocaleString("en-US")}</p>
              </div>
              <div className="detail-card">
                <p>Revenue</p>
                <p>${movie.movie.revenue.toLocaleString("en-US")}</p>
              </div>
              <div className="detail-card">
                <p>Rating</p>
                <p>{movie.movie.average_rating}/10</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <>
        <NoMatch />
        <h2 className="go-back-text">Please go back.</h2>
      </>
    );
  }
};

export default MoviePage;

MoviePage.propTypes = {
  movie: PropTypes.object,
};
