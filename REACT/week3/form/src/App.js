import React, { Component } from "react";
import Form from "./Form";
class App extends Component {
  state = {
    firstname: "",
    lastname: ""
  };
  handler = event => {
    event.preventDefault();
    const fName = event.target.firstname.value;
    const lName = event.target.lastname.value;
    this.setState({
      firstname: fName,
      lastname: lName
    });
  };
  render() {
    return (
      <div>
        <Form handler={this.handler} />
        <ul
          style={{
            listStyleType: "none",
            position: "absolute",
            top: "45%",
            left: "39%"
          }}
        >
          <li style={{ display: "inline-block", marginRight: "10px" }}>
            {this.state.firstname}
          </li>
          <li style={{ display: "inline-block" }}>{this.state.lastname}</li>
        </ul>
      </div>
    );
  }
}

export default App;
