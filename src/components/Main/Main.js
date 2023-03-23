import React from "react";
import Movie from "../Movie/Movie";
import "./Main.css";

const Main = (props) => {
  const movieElements = props.movies.movies.map((movie) => {
    return (
      <Movie title={movie.title} rating={movie.average_rating} key={movie.id} />
    );
  });

  return <div className="movie-container">{movieElements}</div>;
};

export default Main;
