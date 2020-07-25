const { Sequelize } = require("sequelize");
const connection = new Sequelize(
    process.env.DATABASE_URL,
    { logging: process.env.ENV == "dev" ? console.log : false }
);

module.exports = connection;