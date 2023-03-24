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
      error: ''
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
        this.setState({ allMovies: data.movies });
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
    if (this.state.error === '') {
      return (
        <div>
          <h1>Rancid</h1>
          {!this.state.main && <button onClick={this.changeView}>Home</button>}
          {this.state.main ? (
            <Main movies={this.state.allMovies} onViewChange={this.changeView} />
          ) : (
            <MoviePage movie={moviePageSample} />
            )}
        </div>);
    } else {
        return (
          <div>
            <h1>Rancid</h1>
            <h2>{this.state.error}, sorry!</h2>
          </div>
        )
    }
  }
}

export default App;





        {/* {this.state.main && this.state.error === '' ? (
          <Main movies={this.state.allMovies} onViewChange={this.changeView} />
        ) : !this.state.main && this.state.error === '' ? (
          <MoviePage movie={moviePageSample} />
        ) : (
        <div> 
          <Main movies={this.state.allMovies} onViewChange={this.changeView} />
          <h2>{this.state.error}</h2>
        </div>) */}
