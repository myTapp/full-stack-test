const Repository = require("./Repository");
const UserModel = require("./../models/User");

class UserRepository extends Repository {

    constructor() {
        super(UserModel);
    }
}

module.exports = UserRepository;