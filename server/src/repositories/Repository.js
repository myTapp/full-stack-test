
class Repository {

    constructor(model) {
        this._model = model;
    }

    findById(id) {
        return this._model.findAll({
            where: {
                id
            }
        });
    }

    findAll() {
        return this._model.findAll();
    }

    create(newRegister) {
        return this._model.create(newRegister);
    }

    update(id, datasModified) {
        const item = await this.findById(id);
        Object.keys(datasModified)
            .map(key => {
                item[key] = datasModifiaed[key]
            });
        item.save();
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