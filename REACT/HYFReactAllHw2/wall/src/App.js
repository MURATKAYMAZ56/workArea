import React, { Component } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import todos from "./Components/todos";
import AddTodo from "./Components/AddTodo";

class App extends Component {
  state = {
    todos
  };
  removeTodo = event => {
    const todos = this.state.todos.filter(
      todo => String(event.target.id) !== String(todo.id)
    );
    this.setState({ todos });
    console.log(event.target.id);
  };
  addTodoHandler = (desc, deadline) => {
    const currentTodos = this.state.todos || [];
    const id = currentTodos.length + 1;
    currentTodos.push({
      id,
      description: desc,
      deadline,
      done: false
    });
    this.setState({
      todos: currentTodos
    });
  };
  onChange = event => {
    const id = event.target.id;
    const todos = this.state.todos;
    todos.forEach(todo => {
      if (String(id) === String(todo.id)) {
        todo.done = !todo.done;
      }
    });
    this.setState(todos);

    //console.log(id);
    //console.log("you called me?");
  };
  render() {
    const TodoItems = this.state.todos.map(todo => (
      <TodoList
        todo={todo}
        key={todo.id}
        onChange={this.onChange}
        removeTodo={this.removeTodo}
      />
    ));
    return (
      <div className="App">
        <ul> {TodoItems.length > 0 ? TodoItems : <p> No Items </p>}</ul>
        <AddTodo addTodoHandler={this.addTodoHandler} />{" "}
      </div>
    );
  }
}

export default App;
