const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('resuest ws made' + req.url);
    res.writeHead(200, { 'Content-type': 'application/json' });

    const myObj = {
        name: 'Murat',
        job: 'Ninja',
        age: 28
    };
    res.end(JSON.stringify(myObj));

});

