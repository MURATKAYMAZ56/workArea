import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import todos from "./Components/todos";
import TodoList from "./Components/TodoList";

class App extends Component {
  state = {
    todos
  };
  onChange = event => {
    const id = event.target.id;
    const todos = this.state.todos;
    todos.forEach(todo => {
      if (String(id) === String(todo.id)) {
        todo.done = !todo.done;
      }
    });
    this.setState({
      todos
    });
  };

  render() {
    console.log(this.state);
    const todoItems = this.state.todos.map(todo => (
      <TodoList key={todo.id} todo={todo} onChange={this.onChange} />
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> W2 todo list </h1>{" "}
        </header>{" "}
        <ul> {todoItems.length > 0 ? todoItems : <p> No items </p>}</ul>
      </div>
    );
  }
}

export default App;
