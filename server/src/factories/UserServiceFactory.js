const Factory = require("./Factory");
const UserRepository = require("./../repositories/UserRepository");
const UserService = require("./../services/UserService");
const encryptor = require("./../utils/Encryptor");

class UserServiceFactory extends Factory {

    make() {
        return new UserService(new UserRepository(), encryptor);
    }
}

module.exports = UserServiceFactory;