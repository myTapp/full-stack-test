
class Repository {

    constructor(model) {
        this._model = model;
    }

    async findById(id, options) {
        const item = await this._model.findOne({
            where: {
                id
            }, 
            ...options
        });

        if (!item) {
            return null;
        }

        return item.dataValues;
    }

    async findAll(options) {
        return this._model.findAll(options);
    }

    create(newRegister) {
        return this._model.create(newRegister);
    }

    async update(id, datasModified) {
        return this._model.update(datasModified, {
            where: {
                id
            }
        });
    }

    delete(id) {
        return this._model.destroy({
            where: {
                id
            }
        });
    }

    getModel() {
        return this._model;
    }
}

module.exports = Repository;