"use strict";
const { readFile, writeFile, appendFile } = require("fs"); // indicates that want to import just readFile  and writeFilefrom fs module
// const { readFile } = require("fs"); is equal to 2 codes down
//const fs = require ('fs');
//const ReadFile= fs.readFile;

/*  
readFile("somefile.txt", "utf8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
*/
//now lets do this by promise
const { promisify } = require("util"); //// by promisify no neeed to wrtie regular promise code as it is written below we just do

/*function readFileWithpromise(path, encoding) {
  return new Promise((resolve, reject) => {
    readFile(path, encoding, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
}
*/
const readFileWithpromise = promisify(readFile);
const PATH = "somefile.txt";
const writeFileWithPromise = promisify(writeFile);
const appendFileWithPromise = promisify(appendFile);

// //////////TO READ FILE////////////
// readFileWithpromise(PATH, "utf-8").then(
//   data => {
//     console.info(data);
//   },
//   err => {
//     console.log(err);
//   }
// );

////////////////Write and read it/////////////
/*
writeFileWithPromise(PATH, "content has changed by you")
  .then(() => {
    return readFileWithpromise(PATH, "utf-8");
  })
  .then(
    data => {
      console.log(data);
    },
    err => {
      console.log(err);
    }
  );
  */

///////// do the above the same by async func///////////////

async function main() {
  const addingContent = {
    name: "cat",
    age: 5
  };
  //await writeFileWithPromise(PATH, "content has changed by you");
  await writeFileWithPromise(PATH, JSON.stringify(addingContent));

  const data = await readFileWithpromise(PATH, "utf-8").catch(console.error);

  const parsed = JSON.parse(data);

  console.log(parsed);
}
main();
