import React, { Component } from "react";
import "./App.css";
import MoviePage from "../MoviePage/MoviePage";
import Main from "../Main/Main.js";
import { Switch, Link, Route } from "react-router-dom";
import NoMatch from "../NoMatch";
import Header from "../Header/Header";
import "./Media-queries.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      filteredMovies: [],
      main: true,
      error: "",
      isLoading: true,
      selectedMovie: null,
    };
  };

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
        this.setState({
          allMovies: data.movies,
          isLoading: false,
          filteredMovies: data.movies,
        });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  };

  selectMovie = (id) => {
    console.log('movie is selected')
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          selectedMovie: data,
          main: false,
        });
    });
  };

  resetSelected = () => {
    this.setState({
      selectedMovie: null,
      main: true,
    });
  };

  searchMovies = (e) => {
    const value = e.target.value;
    const filteredMovies = this.state.allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ filteredMovies: [...filteredMovies] });

    if (filteredMovies.length === 0) {
      this.setState({ error: 'No results match your search'});
    } else {
      this.setState({ error: ''});
    }
  };

  resetSearch = () => {
    document.getElementById("search-field").value = "";
    this.setState({ error: ''});
    this.componentDidMount();
  };

  render() {
    return (
      <div>
        <Header search={this.searchMovies} resetSearch={this.resetSearch} page={this.state.main}/>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main
                movies={this.state.filteredMovies}
                select={this.selectMovie}
                loading={this.state.isLoading}
              />
            )}
          />
          <Route
            exact
            path="/:movieID"
            render={() => {
              return (
                <div>
                  <Link
                    to="/"
                    className="home-btn"
                    onClick={this.resetSelected}
                  >
                    Go Back
                  </Link>
                  <MoviePage movie={this.state.selectedMovie}/>
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
      </div>
    );
  }
}

export default App;
