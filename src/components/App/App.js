import React, { Component } from "react";
import "./App.css";
import MoviePage from "../MoviePage/MoviePage";
import Main from "../Main/Main.js";
import moviePageSample from "../../moviePageSample";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      main: true,
      error: '',
      isLoading: true
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('No Such Path')
        }
      })
      .then((data) => {
        this.setState({ allMovies: data.movies, isLoading: false});
      })
      .catch((err) => {
        this.setState({ error: err.message})
      })
  };

  changeView = () => {
    this.setState((prevState) => {
      return {
        main: !prevState.main,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Rancid Tomatillos</h1>
        {!this.state.main && <button onClick={this.changeView}>Home</button>}

        {this.state.main ? (
          <Main movies={this.state.allMovies} onViewChange={this.changeView} />
        ) : (
          <MoviePage movie={moviePageSample} />
        )}

        {this.state.isLoading && this.state.error === '' ? <h2>Loading</h2>
        : this.state.error !== '' && <h2>{this.state.error}, sorry!</h2>}
      </div>);
  }
}

export default App;