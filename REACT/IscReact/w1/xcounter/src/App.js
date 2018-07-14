import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    count: 50
  };

  handleIncreaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentWillMount() {
    console.log("willMount");
    console.log(this.state);
  }
  render() {
    console.log("render");
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter</h1>
        </header>
        <span>Counter | {this.state.count}</span>
        <br />
        <button onClick={this.handleIncreaseCount}>Increase</button>
        <button onClick={this.handleDecreaseCount}>Decrease</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("didmount");
    console.log(this.state);
  }
  componentDidUpdate() {
    console.log("didUpdate");
    console.log(this.state);
  }
  shouldComponentUpdate() {
    return true;
  }
}

export default App;
