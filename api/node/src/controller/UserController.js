const bcrypt = require("bcrypt");

const User = require("../models/User");
const UserService = require("../service/UserService");

module.exports = {
  async add(req, res) {
    const userDto = req.body;

    const user = await UserService.createUser(userDto);
    return res.json(user);
  },


  async authenticateUser(req, res) {
    const userDto = req.body;

    const { user, token } = await UserService.authenticate(userDto);


    return res.json({
      user,
      token
    });
  }
};
