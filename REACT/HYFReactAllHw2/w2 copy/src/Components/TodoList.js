import React from "react";
class TodoList extends React.Component {
  render() {
    const todo = this.props.todo;
    const doStyle = {
      textDecoration: "line-through"
    };
    const unDoStyle = {};
    return (
      <li>
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.done}
          onChange={this.props.onChange}
        />
        <span style={todo.done ? doStyle : unDoStyle}>
          {todo.description} - {todo.deadline}
        </span>
      </li>
    );
  }
}
export default TodoList;
