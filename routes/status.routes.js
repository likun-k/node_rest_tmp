const express = require('express');

const statusController = require('../src/controller/status.controller')

const routes = express.Router()

routes
    .all('/', statusController.serverStatus)
    // .post('/', statusController.serverStatus)
    // .delete('/', statusController.serverStatus)
    // .put('/', statusController.serverStatus)


module.exports = routes