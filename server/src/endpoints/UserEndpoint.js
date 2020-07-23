const Endpoint = require("./Endpoint");
const userValidation = require("./validations/UserValidation");

class UserEndpoint extends Endpoint {

    constructor(userService) {
        super();
        this._service = userService;
    }

    getValidationRules() {
        return userValidation();
    }


    authentication(request, response) {
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

    async findAll(request, response) {
        try {
            const users = await this._service.findAll();
            response.json(users);
        } catch(error) {
            next(error)
        }
    }


    async findById(request, response) {
        try {
            const id = request.params.id;
            const user = await this._service.findById(id);
            response.json(user);
        } catch(error) {
            next(error)
        }
    }

}

module.exports = UserEndpoint;