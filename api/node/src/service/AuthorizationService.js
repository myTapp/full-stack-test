const jwtUtils = require("../utils/jwtUtils");
const UserService = require("./UserService");
const RickAndMortyService = require("./RickAndMortyService");
module.exports = {
  async isAutorization(req) {
    const authHeader = req.headers.authorization;
    const parts = authHeader.split(" ");
    const [scheme, token] = parts;
    console.log(token);
    const userId = jwtUtils.getUserId(token);
    const user = await UserService.getById(userId);
    return { hasAutorization: user.dataValues.id === userId };
  }
};
