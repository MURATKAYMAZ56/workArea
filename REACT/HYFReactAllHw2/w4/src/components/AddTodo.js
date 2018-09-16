import React from "react";

class AddTodo extends React.Component {
  state = {
    description: "",
    deadline: ""
  };

  submit() {
    this.props.addTodoHandler(this.state.description, this.state.deadline);
  }

  onChange = evt => {
    evt.target.name === "description"
      ? this.setState({
          description: evt.target.value
        })
      : this.setState({ deadline: evt.target.value });
  };
  render() {
    return (
      <div>
        Enter:
        <input
          name="description"
          type="text"
          placeholder="description"
          onChange={this.onChange}
        />
        <input
          name="deadline"
          type="text"
          placeholder="deadline"
          onChange={this.onChange}
        />
        <br />
        <button name="add" type="submit" onClick={this.submit.bind(this)}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
