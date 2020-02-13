const express = require ('express');


const authMiddleware = require('../middlewares/auth')

const routes = express.Router();
routes.use(authMiddleware);

routes.get('/', (req, resp) => {
    console.log(req)
    return resp.json({hello: 'auth show'})
});

module.exports = app => app.use('/auth', routes);