import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { inject, observer } from "mobx-react";
@inject("TodolistStore")
@observer
class App extends Component {
  render() {
    //console.log(this.props.TodolistStore);
    const { addTodo, listItem } = this.props.TodolistStore;
    console.log(addTodo);
    // const  todolistItems  = this.props.TodolistStore.listItem;
    // console.log(todolistItems);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => addTodo()}> Add</button>
        {listItem.map(item => <li key={item.id}>{item.description}</li>)}
      </div>
    );
  }
}

export default App;
