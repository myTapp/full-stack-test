const Endpoint = require("./Endpoint");
const userValidation = require("./validations/UserValidation");

class UserEndpoint extends Endpoint {

    constructor(userService, cacheClient) {
        super();
        this._service = userService;
        this._cacheClient = cacheClient;
        this.TIME_EXPIRED = 10 * 60;
        this.KEY_CACHE = "users";
        this.findById = this.findById.bind(this);
        this.findAll = this.findAll.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    getValidationRules() {
        return userValidation();
    }


    async findAll(request, response, next) {
        try {
            const users = await this._cacheClient.remembersadd(
                this.KEY_CACHE, () => this._service.findAll(), this.TIME_EXPIRED
            );
            response.json(users); 
        } catch(error) {
            next(error)
        }
    }


    async findById(request, response, next) {
        try {
            const id = request.params.id;
            const user = await this._service.findById(id);
            response.json(user);
        } catch(error) {
            next(error);
        }
    }

    async delete(request, response, next) {
        try {
            const id = request.params.id;
            await this._service.delete(id);
            await this._cacheClient.remove(this.KEY_CACHE);
            response.sendStatus(204);
        } catch(error) {
            next(error)
        }
    }

    async update(request, response, next) {
        try {
            const id = request.params.id;
            const datasModified = request.body;
            await this._service.update(id, datasModified);
            await this._cacheClient.remove(this.KEY_CACHE);
            response.sendStatus(204);
        } catch(error) {
            next(error)
        }
    }

    async create(request, response, next) {
        try {
            const newUser = request.body;
            this.isValid(newUser);
            await this._service.create(newUser);
            await this._cacheClient.remove(this.KEY_CACHE);
            response.sendStatus(201);
        } catch(error) {
            next(error)
        }
    }

}

module.exports = UserEndpoint;