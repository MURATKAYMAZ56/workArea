import React from "react";

class Checkbox extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.done}
          onChange={this.props.onChange}
        />
        <span>
          {todo.deadline}-{todo.description}
        </span>
      </li>
    );
  }
}
export default Checkbox;
