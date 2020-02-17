const jwtUtils = require("../utils/jwtUtils");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const ErrorHandler = require("../ErrorHandler");
const UserDao = require("../models/UserDao");

module.exports = {
  async authenticate(userDto) {
    const { name, password } = userDto;
    const user = await this.getByName(name);

    if (!user) return { error: ErrorHandler.INVALID_CREDENCIALS };
    if (!(await bcrypt.compare(password, user.password)))
      return { error: ErrorHandler.INVALID_CREDENCIALS };

    user.password = undefined;
    return { user, token: jwtUtils.genereteToken({ id: user.id }) };
  },

  async createUser(userDto) {
    const { name, password } = userDto;

    const hash = await bcrypt.hashSync(password, 10);
    const user = await User.create({ name, password: hash });

    return user;
  },
  async delete(userDto) {
    const { id } = userDto;
    const user= await this.getById(id);
    if(user){
      console.log(user)
      await UserDao.remove(user);
    }
    return
  },
  async getByName(name) {
    return await UserDao.findByName(name);
  },
  async getById(id) {
    return await UserDao.findById(id);
  }
};
