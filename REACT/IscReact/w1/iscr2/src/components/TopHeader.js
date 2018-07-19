import React, { Component } from "react";
import logo from "../logo.svg";
class TopHeader extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Murat Blog</h1>
      </div>
    );
  }
}
export default TopHeader;
