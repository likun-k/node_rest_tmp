var express = require('express');
// const docsRoute = require('./docs.route');
const statusRouter = require('./status.routes');
const userRouter = require('./user.routes');

const router = express.Router();

/**,
 * @swagger
 * /api/addExam:
 *    post:
 *      tags:
 *      - Demo
 *      summary: Demo swagger doc
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: name
 *        in: query
 *        description: name desc
 *        required: false
 *        type: integer
 *        maximum:
 *        minimum: 1
 *        format:
 *      - name: phone
 *        in: query
 *        description: user phone number
 *        required: false
 *        type: string
 *        maximum:
 *        minimum: 1
 *        format:
 *      responses:
 *        200:
 *          description: successful operation
 *          schema:
 *            ref: #/definitions/Order
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 * */
const defaultRoutes = [
  {
    path: '/',
    route: statusRouter,
  },
  {
    path: '/user',
    route: userRouter,
  },
];

// const devRoutes = [
//   // 仅在开发模式下可以访问
//   {
//     path: '/docs',
//     route: docsRoute,
//   },
// ];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
