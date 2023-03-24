import React, { Component } from "react";
import "./App.css";
import movieData from "../../movieData";
import MoviePage from "../MoviePage/MoviePage";
import Main from "../Main/Main.js";
import moviePageSample from "../../moviePageSample";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      main: true,
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ allMovies: data.movies });
      });
  };

  changeView = () => {
    if (this.state.main === true) {
      this.setState({ main: false });
    } else {
      this.setState({ main: true });
    }
  };

  render() {
    return (
      <div>
        <h1>Rancid</h1>
        {!this.state.main && <button onClick={this.changeView}>Home</button>}
        {this.state.main ? (
          <Main movies={this.state.allMovies} onViewChange={this.changeView} />
        ) : (
          <MoviePage movie={moviePageSample} />
        )}
      </div>
    );
  }
}

export default App;
