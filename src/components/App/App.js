import React, { Component } from "react";
import "./App.css";
import MoviePage from "../MoviePage/MoviePage";
import Main from "../Main/Main.js";
import moviePageSample from "../../moviePageSample";
import { Switch, Link, Route } from "react-router-dom";
import NoMatch from "../NoMatch";
import Form from "../Form/Form";
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

  componentDidUpdate = () => {
    console.log(this.state.selectedMovie)
  }

  selectMovie = (id) => {
    console.log('movie is selected')
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        this.setState({ selectedMovie: data });
      })
      // console.log("Selected movie", this.state.selectedMovie)
  };

  resetSelected = () => {
    this.setState({ selectedMovie: null });
    console.log('selected is reset')
  };

  searchMovies = (e) => {
    const value = e.target.value;
    const filteredMovies = this.state.allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filteredMovies);
    this.setState({ filteredMovies: [...filteredMovies] });
  };

  resetSearch = () => {
    document.getElementById("search-field").value = "";
    this.componentDidMount();
  };

  render() {
    return (
      <div>
        <Header search={this.searchMovies} resetSearch={this.resetSearch} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main
                movies={this.state.filteredMovies}
                select={this.selectMovie}
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
