import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Description from "./components/Description";
import Deadline from "./components/Deadline";
import todos from "./todos.json";

class App extends Component {
  state = {
    todos: todos
  };

  render() {
    console.log(this.state);
    const todoItems = this.state.todos.map(todo => (
      <div>
        <p>
          <Description key={todo.id} todo={todo.description} />
          <Deadline todo={todo.deadline} />
        </p>
      </div>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> W1 Todo List </h1>{" "}
        </header>{" "}
        <div>
          <ul> {todoItems.length > 0 ? todoItems : <p> No items </p>}</ul>
        </div>{" "}
      </div>
    );
  }
}

export default App;
