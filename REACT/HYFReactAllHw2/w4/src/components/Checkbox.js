import React from "react";

class Checkbox extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        <li>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.done}
            onChange={this.props.onChange}
          />
          <span>
            {todo.deadline} - {todo.description}
          </span>
          <button
            id={todo.id}
            name="Remove"
            type="submit"
            onClick={this.props.removeTodo}
          >
            Remove
          </button>
        </li>
      </div>
    );
  }
}
export default Checkbox;
