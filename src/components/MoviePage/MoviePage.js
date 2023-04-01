import React from "react";
import PropTypes from "prop-types";
import "./MoviePage.css";
import { Link, useParams } from "react-router-dom";

const MoviePage = ({ movie, movieTrailer }) => {
  if (movie !== null) {
    const filteredVideo = movieTrailer.videos.filter(
      (movie) => movie.type === "Trailer"
    )[0].key;
    console.log("Filtered Video!!!!!", filteredVideo);

    return (
      <main>
        <div className="trailer-container">
          <iframe
            className="movie-trailer"
            title={movie.movie.title}
            width="620"
            height="420"
            src={`https://www.youtube.com/embed/${
              movieTrailer.videos.filter((movie) => movie.type === "Trailer")[0]
                .key
            }`}
            alt="Movie trailer"
          ></iframe>
        </div>
        <div className="movie-page">
          <div className="left-content">
            <img src={movie.movie.poster_path} alt="Movie poster"></img>
          </div>
          <div className="right-content">
            <h2>{movie.movie.title}</h2>
            <div className="container">
              <h3>DESCRIPTION</h3>
              <p className="tagline">{movie.movie.tagline}</p>
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
                <p>${movie.movie.budget} M</p>
              </div>
              <div className="detail-card">
                <p>Revenue</p>
                <p>${movie.movie.revenue} M</p>
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
  }
};

export default MoviePage;

MoviePage.propTypes = {
  movie: PropTypes.object,
};
