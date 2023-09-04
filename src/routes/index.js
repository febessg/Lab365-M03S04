const {routesFromUser} = require('./users.routes');
const {routesFromProduct} = require('./products.routes');  

const {Router} = require('express');
const routes = new Router();

routes.use('/api', [ 
    routesFromUser(),
    routesFromProduct()
]);

module.exports = routes;