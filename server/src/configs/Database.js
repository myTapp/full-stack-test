const { Sequelize } = require("sequelize");
const connection = new Sequelize(process.env.DATABASE_URL, { logging: console.log });

module.exports = connection;