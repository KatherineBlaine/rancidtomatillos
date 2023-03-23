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
      allMovies: movieData,
      main: true
    };
  }

  changeView = () => {
    console.log('hello')
    if (this.state.main === true) {
      this.setState({allMovies: movieData, main: false})
    } else {
      this.setState({allMovies: movieData, main: true})
    }
  }


  render() {
    return (
      <div>
        <h1>Rancid</h1>
        <button onClick={this.changeView}>'Change View'</button>
        {this.state.main ? <Main movies={this.state.allMovies} onViewChange={this.changeView}/> : <MoviePage movie={moviePageSample}/> }
      </div>
    );
  }
}

// 

export default App;
