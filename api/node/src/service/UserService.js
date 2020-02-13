const jwtUtils = require("../utils/jwtUtils");
const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {

  async authenticate(userDto) {
    const { name, password } = userDto;
    console.log(name)
    const user = await User.findOne({ name });
    
    
    if (!user ) return res.status(400).send({ error: "User not found" });
    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: "Invalid Credencials" });

    user.password = undefined;
    console.log(user.dataValues.name)
    return { user, token: jwtUtils.genereteToken({ id: user.id }) };
  },
  async createUser(userDto){
    const { name, password } = userDto;
    const hash = await bcrypt.hashSync(password, 10);
    const user = await User.create({ name, password: hash });

    return user;
  }

};
