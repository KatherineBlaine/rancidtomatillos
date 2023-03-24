import React from "react";
import PropTypes from 'prop-types'

const MoviePage = ({ movie }) => {
  return (
    <div>
      <img src={movie.movie.poster_path}></img>
      <h3>{movie.movie.title}</h3>
      <p>{movie.movie.average_rating}</p>
      <p>{movie.movie.overview}</p>
      <p>{movie.movie.genres}</p>
      <p>{movie.movie.budget}</p>
      <p>{movie.movie.revenue}</p>
      <p>{movie.movie.runtime}</p>
      <p>{movie.movie.tagline}</p>
    </div>
  )
}

export default MoviePage;

MoviePage.propTypes = {
  movie: PropTypes.object
}