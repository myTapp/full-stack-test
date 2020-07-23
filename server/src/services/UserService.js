const NotFoundException = require("./../exceptions/NotFoundException");
const LogicException = require("./../exceptions/LogicException");


class UserService {

    constructor(repository) {
        this._repository = repository;
    }

    findAll() {
        return this._repository.findAll();
    }

    findByEmail(email) {
        return this._repository.findByEmail(email);
    }

    async create(newUser) {
        const user = await this._repository.findByEmail(newUser.email);

        if (user) {
            throw new LogicException("Tente outro email!");
        }

        return this._repository.create(newUser);
    }

    async delete(id) {
        await this.findById(id);
        return this._repository.delete(id);
    }

    async update(id, datasModified) {
        await this.findById(id);
        const user = await this._repository.findByEmailAndIdDifferenceMencionated(
            datasModified.email, id
        );

        if (user) {
            throw new LogicException("Tente outro email!");
        }

        return this._repository.update(id, datasModified);
    }

    async findById(id) {
        const user = await this._repository.findById(id);
        
        if (!user) {
            throw new NotFoundException("Usuário não encontrado!");
        }
    }

}

module.exports = UserService;