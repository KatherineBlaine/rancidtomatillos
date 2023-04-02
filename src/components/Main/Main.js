import React from "react";
import Movie from "../Movie/Movie";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ movies, select, videoMethod }) => {
  if (movies !== []) {
    const movieElements = movies.map((movie) => {
      return (
        <Movie
          posterImg={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
          key={movie.id}
          id={movie.id}
          selectMovie={select}
          selectVideo={videoMethod}
        />
      );
    });
    return <div className="movie-container">{movieElements}</div>;
  }
};

export default Main;

Main.propTypes = {
  movies: PropTypes.array,
  onViewChange: PropTypes.func,
};
