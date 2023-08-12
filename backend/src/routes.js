const routes = require("express").Router();
const cors = require('cors');
const authMiddleware = require('./app/middleware/auth');

const SessionController = require('./app/controllers/SessionController');
const PunkApiController = require('./app/controllers/PunkApiController');

routes.use(cors({origin: '*'}));

routes.post('/api/v1/login', SessionController.store);
routes.post('/api/v1/create-user', SessionController.create);


routes.use(authMiddleware);
routes.get('/api/v1/beers', PunkApiController.index);
routes.get('/api/v1/beers/:id', PunkApiController.find);
routes.get('/api/v1/beers/random', PunkApiController.random);


module.exports = routes;