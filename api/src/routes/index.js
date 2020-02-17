const express = require("express");
const UserController = require("../controller/UserController");

const routes = express.Router();


routes.post("/", UserController.add);


routes.get("/teste", UserController.teste);

routes.post("/authenticate", UserController.authenticateUser);
module.exports = app => app.use("/users", routes);
