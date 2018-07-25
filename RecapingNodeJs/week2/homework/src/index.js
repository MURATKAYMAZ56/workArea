"use strict";
const { readFile, writeFile } = require("fs");
const { promisify } = require("util");
const readFileWithPromise = promisify(readFile);
const writeFileWithPromise = promisify(writeFile);

async function main() {
  const [, , cmd, ...args] = process.argv;
  //console.log(cmd);
  const TODO_FILE = "todo.json";
  //console.log(TODO_FILE);

  switch (cmd) {
      case "add":
          {
              const data = await readFileWithPromise(TODO_FILE, "utf8").catch(() => {
                  "[]";
              });
              const todos = JSON.parse(data);
              const newTodo = args.join("");
              todos.push(newTodo);
              await writeFileWithPromise(TODO_FILE, JSON.stringify(todos));

              break;
          }
      case "list": {
          const data = await readFileWithPromise(TODO_FILE, "utf8").catch(() => "[]");
          const todos = JSON.parse(data);
          console.log(todos);
      
          break;
      }

    case "remove":
      break;

    case "reset":
          break;

      case "help":

    default:
      console.log("some help");
      break;
  }
}
main();