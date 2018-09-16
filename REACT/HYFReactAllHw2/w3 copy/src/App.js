import React, {
  Component
} from "react";
import {
  observer
} from 'mobx-react';
import logo from "./logo.svg";
import "./App.css";
import Checkbox from "./components/Checkbox";
import todos from "./components/todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos
  };
  removeTodo = (event) => {

    const todos = this.state.todos.filter(todo => String(event.target.id) !== String(todo.id));
    console.log(todos)
    this.setState({
      todos
    })
  }
  onChange = event => {
    const id = event.target.id;
    const todos = this.state.todos;
    todos.forEach(todo => {
      if (String(id) === String(todo.id)) {
        todo.done = !todo.done;
      }
    });
    this.setState({
      todos
    });
  };

  addTodoHandler = (des, deadline) => {
    const curTodos = this.state.todos || [];
    const id = curTodos.length + 1;

    curTodos.push({
      id,
      description: des,
      deadline: deadline,
      done: false
    });
    this.setState({
      todos: curTodos
    });
  };

  render() {
      const todoItems = this.state.todos.map(todo => < div >
        <
        Checkbox key = {
          todo.id
        }
        todo = {
          todo
        }
        onChange = {
          this.onChange
        }
        removeTodo = {
          this.removeTodo
        }
        /> <
        /div>);



        return ( <
          div className = "App" >
          <
          header className = "App-header" >
          <
          img src = {
            logo
          }
          className = "App-logo"
          alt = "logo" / >
          <
          h1 className = "App-title" > Welcome to React < /h1> <
          /header> <
          ul > {
            todoItems.length > 0 ? todoItems : < p > No Items!! < /p>}</ul >
              <
              div >
              <
              AddTodo addTodoHandler = {
                this.addTodoHandler
              }
            /> <
            /div> <
            /div>
          );
        }
      }

      export default App;