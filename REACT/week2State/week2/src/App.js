import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Name from "./Name";
import Button from "./Button";
import Name2 from "./Name2";
import Button2 from "./Button2";

class App extends Component {
  state = {
    name: "Learn React",
    number: 14
  };

  changeName = () => {
    this.setState({
      name: "Learning state with clas14"
    });
  };
  changeName2 = () => {
    this.setState({
      name: "name 2 with clas14"
    });
  };
  changeNumber = () => {};

  render() {
    const { name } = this.state;
    let statement;
    if (this.state.name === "Learning state with clas14") {
      statement = "this   is class 14 ";
    } else {
      statement = "this is not 14";
    }
    console.log(this.state.class);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> </h1>

          <Name name={this.state.name} />
          <Button clickHandler={this.changeName} />
          <Button2 clickHandler={this.changeName2} />
        </header>
        <Name2 name2={statement} />
      </div>
    );
  }
}

export default App;
// <p>{1 === 1 ? "one is one" : "one is not one"}</p>
