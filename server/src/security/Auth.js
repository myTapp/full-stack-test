const SecurityException = require("../exceptions/SecurityException");
const Token = require("./Token");

class Auth {

    constructor(userService, encripter) {
        this._service = userService;
        this._encrypter = encripter;
    }

    async authenticate(credentials) {
        const user = await this._service.findByEmail(credentials.email);

        if (!user) {
            throw new SecurityException("Credenciais inválidas!");
        }

        const isValidPasswored = await this._encrypter.compare(
            credentials.password, user.password
        );

        if (!isValidPasswored) {
            throw new SecurityException("Credenciais inválidas!");
        }

        return new Token().withData("name", user.name).build();
    }
}

module.exports = Auth;