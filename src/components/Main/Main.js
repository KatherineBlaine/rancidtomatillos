import React from "react";
import Movie from "../Movie/Movie";
import "./Main.css";

const Main = (props) => {
  if (props.movies !== []) {
    const movieElements = props.movies.map((movie) => {
      return (
        <Movie
          title={movie.title}
          rating={movie.average_rating}
          key={movie.id}
          viewChange={props.onViewChange}
        />
      );
    });
    return <div className="movie-container">{movieElements}</div>;
  }
};

export default Main;
