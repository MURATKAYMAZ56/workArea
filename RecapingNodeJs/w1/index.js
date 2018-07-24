"use strict";
const express = require("express");
const http = require("http");
const { Dog_Url, fetchCats } = require("./fetchCats");

//console.log(fetchCats());
const PORT = 4000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/cats":
      res.write(`We have got  ${req.url}`);
      break;
    case "/dogs":
      res.write(`somebody wants a dog? ${req.url}`);
      break;

    default:
      res.statusCode = 404;
      res.write("Not Found Keko");
  }

  res.end();
});
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
