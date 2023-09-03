const { create, findAll, findOne, login } = require('../controllers/user.controller');
const { Router } = require('express');
const {auth} = require('../middlewares/auth');

class UserRouter {
    routesFromUser() {
        const userRoutes = Router();
        userRoutes.post('/users', create);
        userRoutes.get('/users', auth, findAll);
        userRoutes.get('/users/:userId', auth, findOne);
        userRoutes.post('/users/login', login);

        return userRoutes;
    }
};

module.exports = new UserRouter();