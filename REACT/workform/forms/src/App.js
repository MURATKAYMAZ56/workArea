import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextValue from "./TextValue";
class App extends Component {
  state = {
    inputValue: ""
  };

  onChange = event => {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
  };
  onSubmit = () => {
    this.state.inputValue;
  };

  render() {
    console.log(this.state.inputValue);
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onChange}
        />
        <button type="submit" onClick={this.onSubmit}>
          Submit form
        </button>
        <TextValue value={this.state.inputValue} />
      </div>
    );
  }
}

export default App;
