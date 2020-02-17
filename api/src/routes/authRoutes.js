const express = require ('express');
const CharsController = require("../controller/CharsController");

const authMiddleware = require('../middlewares/auth')

const routes = express.Router();
routes.use(authMiddleware);

routes.post('/', CharsController.getData);
module.exports = app => app.use('/api/chars', routes);