"use strict";

// TODO: Write the homework code in this file
const express = require("express");
const { readFile: _readFile, writeFile: _writeFile } = require("fs");
const { promisify } = require("util");
const readFile = promisify(_readFile);
const writeFile = promisify(_writeFile);
const app = express();
const TODO_FILE = "todo.json";
//use built in JSON middleware to automatically parse json
app.use(express.json());

app.get("/", (req, res) => res.send("hello "));

function readTodos() {
  return readFile(TODO_FILE, "utf8").then(JSON.parse, () => []);
}

function writeTodos(todos) {
  return writeFile(TODO_FILE, JSON.stringify(todos));
}
//list,,read  all todos
app.get("/todos", async (req, res) => {
  const todos = await readTodos();
  res.json(todos);
});

//read a todo by id
app.get("/todos/:id", (req, res) => {
  res.send(`Todo Id ${req.param.id}`);
});

//create a todo
app.post("/todos", async (req, res) => {
  const newTodo = req.body;
  const todos = await readTodos();
  todos.push(newTodo);
  await writeTodos(todos);
  res.json(todos);
});

//delete a tod
app.delete("/todos/:id", (req, res) => {});
//delete all todo
app.delete("/todos", (req, res) => {});
//update a todo by Id
app.put("/todos/:id", (req, res) => {});
app.listen(3000, () => console.log("listening port  htttp//localhost:300"));
