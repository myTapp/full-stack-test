const { Sequelize, Model } = require('sequelize');
const connection = require("./../configs/Database");

class User extends Model { }

User.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(120),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: connection,
    modelName: 'users'
});

module.exports = User;