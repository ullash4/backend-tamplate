const express = require('express');

const router = express.Router({ mergeParams: true });
const exampleRoute = require('./example.route');

const defaultRoutes = [
  {
    path: '/examples',
    route: exampleRoute,
  },
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
