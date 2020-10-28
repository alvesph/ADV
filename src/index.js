const express = require('express');
const server = express();

server.get('/teste', (req, res) => {
    res.send('!HELLO WORLD!');
});

server.listen(3000, () => {
    console.log('API ONLINE');
});