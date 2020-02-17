const UserService = require("../service/UserService");

module.exports = {
  async save(req, res) {
    const userDto = req.body;
    const user = await UserService.createUser(userDto);
    return res.json(user);
  },
  async getAuthenticateUser(req, res) {
    const userDto = req.body;
    const { user, token, error } = await UserService.authenticate(userDto, res);
    if(error){
      return res.status(error.status).send({ error:error.msg })
    }else{
      return res.json({
        user,
        token,
    
      });
    }
  },
  async delete(req, res) {
    const userDto = req.body;
    await UserService.delete(userDto);
    return res.json();
  },

};
