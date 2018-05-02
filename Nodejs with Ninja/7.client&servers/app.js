const http = require('http');
const server = http.createServer((res, req) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hey Ninjas');

});
server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
