import React, { Component } from "react";
export default class CommentForm extends Component {
  state = {
    user: "",
    comment: ""
  };
  onFieldChange(field, value) {
    console.log(field, value);
    const newState = this.state;
    newState[field] = value;
    this.setState(newState);
  }
  handleSubmit = () => {
    console.log("submit clicked");
  };
  render() {
    return (
      <div>
        <div>
          <input
            placeholder="type your name"
            type="text"
            value={this.state.user}
            onChange={e => this.onFieldChange("user", e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="type your comment here"
            value={this.state.comment}
            onChange={e => this.onFieldChange("comment", e.target.value)}
          />
        </div>
        <div>
          <button onClick={this.handleSubmit}> Submit</button>
        </div>
      </div>
    );
  }
}
