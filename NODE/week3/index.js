'use strict';
const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('hello');
});
app.post('/cats', (req, res) => {

    res.send('hello from cats');
});

app.listen(3000, () => {
    console.info('listening on local host http//localhost:3000');
});
