import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import todos from "./Component/todos.json";
import CheckBox from "./Component/CheckBox";
class App extends Component {
  state = {
    todos
  };
  render() {
    const todoItems = this.state.todos.map(todo => (
      <CheckBox key={todo.id} todo={todo} onChange={this.onChange} />
    ));
    console.log(this.state.todos);
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <div>
          <ul>{todoItems.length > 0 ? todoItems : <p>Noitems</p>}</ul>
        </div>
      </div>
    );
  }
}

export default App;
