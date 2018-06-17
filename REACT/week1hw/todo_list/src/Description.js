import React, { Component } from "react";

class Description extends Component {
  render() {
    const { description } = this.props;
    return <li key={description}>{description}</li>;
  }
}

export default Description;
