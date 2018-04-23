'use strict';

const http = require('http');

const PORT = 4000;

const server = http.createServer((request, response) => {
    console.log(request.url);
    switch (request.url) {
        case '/cats':
            response.write('we have got cats');
            break;
        case '.dogs':
            response.setHeader('Content-Type', 'application/json');
            response.write('<b>something had</b>');
            break;
        default:
            response.statusCode = 404;
            response.write('Not Found');
    }
    response.write("something in return");
    response.end();
});
server.listen(PORT, () => {
    console.log(`Server listening on http://locahost: ${PORT}`);

});

