import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  FetchButton = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(result => result.json())
      .then(result => console.log(result));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Week5 React lesson </h1>
        </header>
        <div>
          <button onClick={() => this.FetchButton()}>FetchButton</button>
        </div>
      </div>
    );
  }
}

export default App;
