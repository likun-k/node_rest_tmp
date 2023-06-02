const express = require('express');

const userController = require('../src/controller/user.controller')

const routes = express.Router()

routes
    .get('/', userController.queryAll)
    .get('/:id', userController.queryUser)
    .put('/:id', userController.updateUser)
    .post('/', userController.addUser)
    .delete('/:id', userController.deleteUser)


module.exports = routes