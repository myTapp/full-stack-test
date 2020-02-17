const User = require("./User");

module.exports = {
  async findByName(name) {
    const user = await User.findOne({
      where: {
        name
      }
    });
    if (!user) {
      return null;
    }
    return user;
  },

  async findById(id) {
    const user = await await User.findOne({
      where: {
        id
      }
    });
    return user;
  },

  async remove(user) {
    console.log("dao");
    return await await User.destroy({ where: { id: user.id } });
  }
};
