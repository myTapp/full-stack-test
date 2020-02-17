const express = require("express");
const UserController = require("../controller/UserController");

const routes = express.Router();

routes.post("/", UserController.save);
routes.delete("/",UserController.delete )

routes.post("/login", UserController.getAuthenticateUser);

module.exports = app => app.use("/api/users", routes);
