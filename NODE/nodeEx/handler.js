const fs = require('fs');

//fs.writeFileSync("x.json", "Hey there!"); 

function add(todo) {

    var todos = [];

    if (fs.existsSync('./x.json')) {
        todos = require("./x.json");
    }

    todos.push(todo);

    fs.writeFileSync("x.json", JSON.stringify(todos));

}

module.exports = {

    addTodo: add

};