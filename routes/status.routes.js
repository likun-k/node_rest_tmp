const express = require('express');

const statusController = require('../src/controller/status.controller')

const routes = express.Router()

/**
 * @swagger
 * /:
 *  get:
 *    tags:
 *      - Index
 *    summary: 默认请求。 服务运行状态
 *    description: 服务运行状态
 *    responses:
 *      200:
 *        description: success
 */
routes
    .all('/', statusController.serverStatus)
    // .post('/', statusController.serverStatus)
    // .delete('/', statusController.serverStatus)
    // .put('/', statusController.serverStatus)





module.exports = routes
