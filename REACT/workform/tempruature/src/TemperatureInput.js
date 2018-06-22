import React from "react";
export default class Temperature extends React.Component {
  render() {
    const { scale, temp, onChange } = this.props;

    return (
      <div>
        <label>{scale === "c" ? "Celsius" : "Fahrenheit"}:</label>
        <input
          scale="number"
          value={temp}
          onChange={event => onChange(event.target.value, scale)}
        />
      </div>
    );
  }
}
