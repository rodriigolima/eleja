const Router = require('express');

const userController = require('./app/controllers/Users/UserController');

const routes = new Router();

routes.get('/Users', userController.listAll);
routes.post('/Users', userController.create);
routes.delete('/Users/:id', userController.delete);

module.exports = routes;