var express = require('express');
// const docsRoute = require('./docs.route');
const statusRouter = require('./status.routes');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: statusRouter,
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
