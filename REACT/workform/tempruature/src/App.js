import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

class App extends Component {
  state = {
    temp: 0,
    scale: "c "
  };
  onChange = (value, scale) => {
    this.setState({
      temp: value,
      scale: scale
    });
  };

  render() {
    const { temp, scale } = this.state;
    const wouldBoil = temp >= 100;
    let celsiusTemp = null;
    let fahrenheitTemp = null;
    if (scale === "c") {
      celsiusTemp = temp;
      fahrenheitTemp = toFahrenheit(temp);
    } else if (scale === "f") {
      fahrenheitTemp = temp;
      celsiusTemp = toCelsius(temp);
    }
    return (
      <div className="App">
        <TemperatureInput
          scale="c"
          temp={celsiusTemp}
          onChange={this.onChange}
        />
        <TemperatureInput
          scale="f"
          temp={fahrenheitTemp}
          onChange={this.onChange}
        />
        {wouldBoil ? (
          <div>Water woud boil</div>
        ) : (
          <div>Water would not boil.</div>
        )}
      </div>
    );
  }
}

export default App;
