const express = require("express");
const UserController = require("../controller/UserController");

const routes = express.Router();

// routes.get("/", (req, resp) => {
//   return resp.json({ hello: "Wrorld" });
// });

routes.post("/", UserController.add);

routes.post("/authenticate", UserController.getAuthenticateUser);

module.exports = app => app.use("/users", routes);
