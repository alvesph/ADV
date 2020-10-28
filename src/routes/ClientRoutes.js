const express = require('express');
const router = express.Router();

const ClientController = require('../controller/ClientController');

router.post('/', ClientController.create);

module.exports = router;