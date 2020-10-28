const express = require('express');
const server = express();
server.use(express.json());

const ClientRoutes = require('./routes/ClientRoutes');
server.use('/client', ClientRoutes);

server.listen(3000, () => {
    console.log('API ONLINE');
});