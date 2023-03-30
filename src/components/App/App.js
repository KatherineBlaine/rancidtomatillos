import React, { Component } from "react";
import "./App.css";
import MoviePage from "../MoviePage/MoviePage";
import Main from "../Main/Main.js";
import moviePageSample from "../../moviePageSample";
import { Switch, Link, Route } from "react-router-dom";
import NoMatch from "../NoMatch";
import Header from "../Header/Header";
import "./Media-queries.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      main: true,
      error: "",
      isLoading: true,
      selectedMovie: null,
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("No Such Path");
        }
      })
      .then((data) => {
        this.setState({ allMovies: data.movies, isLoading: false });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  };

  selectMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ selectedMovie: data });
      });
  };

  resetSelected = () => {
    this.setState({ selectedMovie: null });
  };

  render() {
    return (
      <main className="main-content">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main movies={this.state.allMovies} select={this.selectMovie} />
            )}
          />
          <Route
            exact
            path="/:movieID"
            render={() => {
              // const selectedMovie = this.state.allMovies.find(movie => movie.id === parseInt(match.params.movieID))
              return (
                <div>
                  <Link
                    to="/"
                    className="home-btn"
                    onClick={this.resetSelected}
                  >
                    Go Back
                  </Link>
                  <MoviePage movie={this.state.selectedMovie} />
                </div>
              );
            }}
          />
          <Route exact path="*" render={() => <NoMatch />} />
        </Switch>

        {this.state.isLoading && this.state.error === "" ? (
          <h2 className="loading-text">Loading...</h2>
        ) : (
          this.state.error !== "" && (
            <h2 className="error-path-text">{this.state.error}, sorry!</h2>
          )
        )}
      </main>
    );
  }
}

export default App;

// Old Code (Conditional Rendering)

// {!this.state.main && <button onClick={this.changeView}>Home</button>}

//         {this.state.main ? (
//           <Main movies={this.state.allMovies} onViewChange={this.changeView} />
//         ) : (
//           <MoviePage movie={moviePageSample} />
//         )}

//         {this.state.isLoading && this.state.error === "" ? (
//           <h2>Loading</h2>
//         ) : (
//           this.state.error !== "" && <h2>{this.state.error}, sorry!</h2>
//         )}
