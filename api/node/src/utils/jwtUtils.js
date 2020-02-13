const authConfig = require("../config/auth");
const jwt = require("jsonwebtoken");

module.exports = {
  genereteToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
      expiresIn: 86400
    });
  }
};
