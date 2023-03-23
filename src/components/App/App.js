import React, { Component } from "react";
import "./App.css";
import movieData from "../../movieData";
import Main from "../Main/Main.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData,
    };
  }

  render() {
    return (
      <div>
        <h1>Rancid</h1>
        <Main movies={this.state.allMovies}/>
      </div>
    );
  }
}

export default App;
