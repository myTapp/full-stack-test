const Factory = require("./Factory");
const encryptor = require("./../utils/Encryptor");
const Auth = require("./../security/Auth");
const UserServiceFactory = require("./UserServiceFactory");

class AuthFactory extends Factory {

    make() {
        const userService = new UserServiceFactory().make();
        return new Auth(userService, encryptor);
    }
}

module.exports = AuthFactory;