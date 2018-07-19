import React, { Component } from "react";
export default class CheckBox extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <li>
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.done}
          onChange={this.props.onChange}
        />
      </li>
    );
  }
}
