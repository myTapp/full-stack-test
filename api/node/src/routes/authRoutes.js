const express = require ('express');
const AuthenticateController = require("../controller/AuthorizationController");

const authMiddleware = require('../middlewares/auth')

const routes = express.Router();
// routes.use(authMiddleware);

routes.post('/', AuthenticateController.isAuthenticatedUser);

routes.get('/', )

module.exports = app => app.use('/api/authorization', routes);