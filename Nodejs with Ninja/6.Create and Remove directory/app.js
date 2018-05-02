const fs = require('fs');
//fs.unlink('writeMe.txt')    // deletes the file named writeMe.txt

//fs.mkdirSync('stuff');     // makes directory

//fs.rmdir('stuff');         // remove directory

//lets do async version

fs.mkdir('stuff', () => {
    fs.readFile('readMe.txt', 'utf8', (err, data) => {
        fs.writeFile('./stuff/writeMe.txt', data);
    });

});


