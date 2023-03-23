import React from "react";

const MoviePage = (props) => {
  return (
    <div>
      <img src={props.movie.movie.poster_path}></img>
      <h3>{props.movie.movie.title}</h3>
      <p>{props.movie.movie.average_rating}</p>
      <p>{props.movie.movie.overview}</p>
      <p>{props.movie.movie.genres}</p>
      <p>{props.movie.movie.budget}</p>
      <p>{props.movie.movie.revenue}</p>
      <p>{props.movie.movie.runtime}</p>
      <p>{props.movie.movie.tagline}</p>
    </div>
  )
}

export default MoviePage;