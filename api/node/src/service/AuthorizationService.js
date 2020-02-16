const jwtUtils = require("../utils/jwtUtils");
const UserService = require("./UserService");
const RickAndMortyService = require("./RickAndMortyService");
module.exports = {
  async isAutorization(req) {
    const token = req.body.token;
    console.log(token)
    const userId = jwtUtils.getUserId(token);
    const user = await UserService.getById(userId);
    const dataApi = await RickAndMortyService.getApiData(req.body.page);
    return {hasAutorization: user.dataValues.id === userId, dataApi}
  }
};
