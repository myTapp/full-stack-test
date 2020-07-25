const Endpoint = require("./Endpoint");
const loginValidation = require("./validations/LoginValidation");

class AuthEndpoint extends Endpoint {

    constructor(auth) {
        super();
        this._auth = auth;
        this.authentication = this.authentication.bind(this);
    }

    getValidationRules() {
        return loginValidation();
    }

    async authentication(request, response, next) {
        try {
            const credentials = request.body;
            this.isValid(credentials);
            const accessToken = await this._auth.authenticate(credentials);
            response.json({
                accessToken
            });
        } catch(error) {
            next(error)
        }
    }


}

module.exports = AuthEndpoint;