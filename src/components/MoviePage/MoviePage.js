import React from "react";
import PropTypes from "prop-types";
import "./MoviePage.css";
import { Link } from "react-router-dom";

const MoviePage = ({ movie, movieDetails }) => {
  const getSpecificMovie = movie.find((movie) => movie.id === 1013860);

  console.log(
    "This is the movie clicked",
    movie.find((movie) => movie.id === 1013860)
  );

  return (
    <main>
      <Link to="/">Go Back</Link>
      <div className="movie-page">
        <div className="left-content">
          <p>This is the ID: {getSpecificMovie.id}</p>
          <img src={getSpecificMovie.poster_path} alt="Movie poster"></img>
        </div>
        <div className="right-content">
          <h3>{getSpecificMovie.title}</h3>
          <p>{getSpecificMovie.average_rating}</p>
          <p>{getSpecificMovie.release_date}</p>
        </div>
      </div>
    </main>
  );
};

export default MoviePage;

MoviePage.propTypes = {
  movie: PropTypes.array,
};

// {/* <h3>{movie.movie.title}</h3> */}
//           {/* <p>{movie.movie.average_rating}</p> */}
//           {/* <p>{movie.movie.overview}</p> */}
//           {/* <p>{movie.movie.genres}</p> */}
//           {/* <p>{movie.movie.budget}</p> */}
//           {/* <p>{movie.movie.revenue}</p> */}
//           {/* <p>{movie.movie.runtime}</p> */}
//           {/* <p>{movie.movie.tagline}</p> */}
