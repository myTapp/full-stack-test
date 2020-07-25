const express = require("express");
const routeNotFoundMiddleware = require("./../middlewares/RouteNotFound");
const handlerExceptionMiddleware = require("./../middlewares/HandlerException");
const authMiddleware = require("./../middlewares/Auth");
const authRoutes = require("./Auth");
const userRoutes = require("./User");
const beerRoutes = require("./Beer");

module.exports = (app) => {


    app.use("/auth", authRoutes(express.Router()));
    
    app.use("/users", authMiddleware.hasPermission, userRoutes(express.Router()));

    app.use("/beers", authMiddleware.hasPermission, beerRoutes(express.Router()));
 
    // Handler exceptions on application.
    app.use(handlerExceptionMiddleware);
    
    // Handler route not found on application.
    app.use(routeNotFoundMiddleware)
}