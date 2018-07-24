"use strict";

const http = require("http");

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer(
    (request, response) => {
      switch (request.url) {
        case "/state":
          response.write(`{"state":${state}}`);
          break;
        case "/add":
          state++;
          response.write(`{"state":${state}}`);
          break;
        case "/subtract":
          state--;
          response.write(`{"state":${state}}`);
          break;
        case "/reset":
          state = 10;
          response.write(`{"state":${state}}`);
          break;

        default:
          response.statusCode = 404;
          response.write("Not Found Keko");
      }

      response.end();
    }
    // TODO: Write your homework code here
  );

  return server;
}

module.exports = {
  createServer
};
