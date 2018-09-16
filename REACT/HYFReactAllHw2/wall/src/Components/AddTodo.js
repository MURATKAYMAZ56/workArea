import React from "react";
class AddTodo extends React.Component {
  state = {
    description: "",
    deadline: ""
  };
  onChange = event => {
    if (event.target.name === "description") {
      this.setState({ description: event.target.value });
    } else {
      this.setState({ deadline: event.target.value });
    }
  };
  Submit = () => {
    this.props.addTodoHandler(this.state.description, this.state.deadline);
  };
  render() {
    return (
      <div>
        <label>Enter New Todo:</label>
        <input
          name="description"
          type="text"
          placeholder="what are u gonna do"
          onChange={this.onChange}
        />
        <input
          name="deadline"
          type="text"
          placeholder="when u will finish it?"
          onChange={this.onChange}
        />
        <button type="submit" onClick={this.Submit.bind(this)}>
          Click To Add
        </button>
      </div>
    );
  }
}
export default AddTodo;
