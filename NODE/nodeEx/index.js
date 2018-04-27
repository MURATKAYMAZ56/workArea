//console.log(process.argv);
const args = process.argv;

const handler = require('./handler.js');

handler.addTodo("hayat guzel");

console.log(handler);

if (args.length < 3) { //  node index.js
    console.log("help");

} else {

    const cmd = args[2];
    if (cmd == "help") {// node index.js help
        console.log("cmd: help");

    } else if (cmd == "add") {// node index.js add "todo"

        const todo = args[3];
        console.log("cmd: add ,param: " + todo);

    } else if (cmd == "remove") {// node index.js remove 
        const index = args[3];
        console.log("cmd: remove ,index: " + index);

    } else if (cmd == "update") {// node index.js update 7 "todo"
        const index = args[3];
        const todo = args[4];

        console.log("cmd: update ,index: " + index + ", todo:" + todo);

    } else if (cmd == "list") {// node index.js list
        console.log("cmd: list");

    } else if (cmd == "reset") { // mpde index.js reset
        console.log("cmd: reset");


    }


};



