


const fs = require('fs');
/*
const readMe = fs.readFileSync('reading.txt', 'utf8');
console.log(readMe);


fs.writeFileSync('writing.txt', readMe);/// first prmtr name of the file that we want, second from where we want to get to write


*/
////DIKKAT sync te readfilesync async te readfile kullanildi!!!!

//// lets make async
fs.readFile('reading.txt', 'utf8', (err, data) => {
    console.log(data);
});


fs.readFile('reading.txt', 'utf8', (err, data) => {
    fs.writeFile('writing.txt', data);
});





