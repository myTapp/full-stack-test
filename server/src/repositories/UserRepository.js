const { Op } = require("sequelize");
const Repository = require("./Repository");
const UserModel = require("./../models/User");

class UserRepository extends Repository {

    constructor() {
        super(UserModel);
    }

    findByEmail(email) {
        return this.getModel().findAll({
            where: {
                email
            }
        });
    }

    findByEmailAndIdDifferenceMencionated(email, id) {
        return this.getModel().findAll({
            where: {
                email: email, 
                id: {
                    [Op.ne]: id
                }
            }
        });
    }
}

module.exports = UserRepository;