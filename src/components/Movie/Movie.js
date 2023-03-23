import React from "react";
import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie-card">
      <h3>{props.title}</h3>
      <p>{props.rating}</p>
    </div>
  );
};

export default Movie;
