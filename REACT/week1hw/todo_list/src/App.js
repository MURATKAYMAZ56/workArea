import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import listitems from "./sources/listitems.json";
import Description from "./Description";
import Date from "./Date";

class App extends Component {
  render() {
    console.log(listitems);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {listitems.map((todo, index) => (
            <div key={index}>
              <Description description={todo.description} />{" "}
              <Date date={todo.date} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
