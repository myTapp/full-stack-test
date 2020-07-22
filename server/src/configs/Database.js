const { Sequelize } = require("sequelize");
const connection = new Sequelize(process.env.DATABASE_URL, { logging: true });



module.exports = connection;