import React from "react";
import PropTypes from "prop-types";
import "./MoviePage.css";
import { Link, useParams } from "react-router-dom";

const MoviePage = ({movie}) => {
  console.log(movie)
  // const { movieID } = useParams();
  // console.log(movieID)
  // const specificMovie = movie.find((movie) => {
  //   return movie.id === Number(movieID);
  // });
  // console.log(specificMovie)
  return (
    <main>
      <Link to="/" className="home-btn">
        Go Back
      </Link>
      <div className="movie-page">
        <div className="left-content">
          <p>This is the ID: {movie.id}</p>
          <img src={movie.poster_path} alt="Movie poster"></img>
        </div>
        <div className="right-content"></div>
      </div>
    </main>
  );
};

export default MoviePage;

MoviePage.propTypes = {
  movie: PropTypes.object,
};
