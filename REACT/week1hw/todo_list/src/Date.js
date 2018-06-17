import React, { Component } from "react";

class Date extends Component {
  render() {
    const { date } = this.props;
    return <li key={date}>{date}</li>;
  }
}
export default Date;
