import React, { Component } from "react";
import todos from "./todos.json";
class AddTodo extends Component {
  state = {
    description: "",
    deadline: ""
  };

  // onSubmit = () => {
  //   this.props.addNewTodo(this.state);
  // };

  onChangeTodo = (field, value) => {
    this.setState({ [field]: value });
  };

  onChangeTodoDescription = event => {
    event.preventDefault();
    this.setState({ description: event.target.value });
  };
  onChangeTodoDeadline = event => {
    event.preventDefault();
    this.setState({ deadline: event.target.value });
  };

  render() {
    //const { todos, addNewTodo } = this.props;
    //const { description, deadline } = this.state;
    const currentState = this.state;
    console.log(currentState);
    return (
      <div>
        <form>
          Enter:
          <input
            value={this.state.description}
            onChange={event => this.onChangeTodoDescription(event)}
            type="text"
            placeholder="description"
          />
          <input
            onChange={event => this.onChangeTodoDeadline(event)}
            value={this.state.deadline}
            type="number"
            placeholder="Deadline:"
          />
          <button onClick={() => this.props.addNewTodo(currentState)}>
            Add New Todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
