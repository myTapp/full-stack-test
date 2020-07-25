const { Op } = require("sequelize");
const Repository = require("./Repository");
const UserModel = require("./../models/User");

class UserRepository extends Repository {

    constructor() {
        super(UserModel);
    }

    async findByEmail(email) {
        const user = await this.getModel().findOne({
            where: {
                email
            }
        });

        if (!user) {
            return null;
        }

        return user.dataValues;
    }

    async findByEmailAndIdDifferenceMencionated(email, id) {
        const user = await this.getModel().findOne({
            where: {
                email: email, 
                id: {
                    [Op.ne]: id
                }
            }
        });

        if (!user) {
            return null;
        }

        return user.dataValues;
    }
}

module.exports = UserRepository;