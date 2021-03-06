import React from "react";
import { inject, observer } from "mobx-react";

@inject("todoS")
@observer
export default class AddTodoItem extends React.Component {
  render() {
    return (
      <div className="add-todo-form">
        <input
          type="text"
          placeholder="task"
          value={this.props.todoS.defaultValue.description}
          onChange={e => this.props.todoS.handleFieldChange(e, "description")}
        />
        <input
          type="text"
          placeholder="deadline"
          value={this.props.todoS.defaultValue.deadline}
          onChange={e => this.props.todoS.handleFieldChange(e, "deadline")}
        />
        <button onClick={this.props.todoS.addTodo}>Add task</button>
      </div>
    );
  }
}
