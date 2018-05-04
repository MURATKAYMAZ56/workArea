const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);////this is main idea


//below was rest for smthng more now no need for it:)


// const server = http.createServer((req, res) => {
//     console.log('request was made:' + req.url);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hey Ninjas');

// });
// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');
