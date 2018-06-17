import React, { Component } from 'react';
import logo from './logo.svg';
import todos from './todos.json';

import './App.css';

class App extends Component {
    state = {
        todos
    }

    onChange = (event) => {
        const id = event.target.id;
        const todos = this.state.todos;

        todos.forEach(todo => {
            if (String(todo.id) === String(id)) {
                todo.done = !todo.done;
            }
        });

        this.setState({ todos });
    }

    render () {
        const doneStyle = {
            textDecoration: 'line-through'
        };

        const unDoneStyle = {
        };

        const todoItems = this.state.todos.map(todo => (
            <li
                key={todo.id}
            >
                <input
                    id={todo.id}
                    type="checkbox"
                    checked={todo.done}
                    onChange={this.onChange}
                />
                <span style={todo.done ? doneStyle : unDoneStyle}>{todo.description}</span>
            </li>
        ));

        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }
}

export default App;
