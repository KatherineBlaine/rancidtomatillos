import React from "react";
import Movie from "../Movie/Movie";

const Main = (props) => {
  console.log(props.movies.movies[0].title);

  const movieElements = props.movies.movies.map((movie) => {
    return <Movie title={movie.title} />;
  });

  return (
    <div>{movieElements}</div>
  )
  
};

export default Main;
