import React, { Component } from "react";
import "./App.css";
import MoviePage from "../MoviePage/MoviePage";
import Main from "../Main/Main.js";
import moviePageSample from "../../moviePageSample";
import { Switch, Link, Route } from "react-router-dom";
import NoMatch from "../NoMatch";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      main: true,
      error: "",
      isLoading: true,
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

  changeView = (movieId) => {
    console.log("Movie Clicked:", movieId);
    return movieId;
  };

  render() {
    return (
      <div>
        <h1>Rancid Tomatillos</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main
                movies={this.state.allMovies}
                onViewChange={this.changeView}
              />
            )}
          />
          <Route
            exact
            path="/:movieID"
            render={() => <MoviePage movie={this.state.allMovies} />}
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
      </div>
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
