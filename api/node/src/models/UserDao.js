
const User = require("./User");

module.exports = {
  async findByName(name) {
    const user = await User.findOne({
      where: {
        name
      }
    });
    if(!user){
        return null;
    }
    return user
  },

  async findById(id) {
    const user = await User.findByPk(id);
    return user;
  }
};
