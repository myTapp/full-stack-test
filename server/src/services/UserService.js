const NotFoundException = require("./../exceptions/NotFoundException");
const LogicException = require("./../exceptions/LogicException");


class UserService {

    constructor(repository, encryptor) {
        this._repository = repository;
        this._encryptor = encryptor;
    }

    findAll() {
        return this._repository.findAll({
            attributes: {exclude: ['password']}
        });
    }

    findByEmail(email) {
        return this._repository.findByEmail(email);
    }

    async create(newUser) {
        const user = await this._repository.findByEmail(newUser.email);

        if (user) {
            throw new LogicException("Tente outro email!");
        }

        newUser.password = await this._encryptor.encrypt(newUser.password);
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

        if (datasModified.password) {
            datasModified.password = await this._encryptor
                .encrypt(datasModified.password);
        }

        return this._repository.update(id, datasModified);
    }

    async findById(id) {
        const user = await this._repository.findById(id, {
            attributes: {exclude: ['password']}
        });
        
        if (!user) {
            throw new NotFoundException("Usuário não encontrado!");
        }

        return user;
    }

}

module.exports = UserService;