const Sequelize = require('sequelize');

const dbConfig = require ('../config/database');

const connection = new Sequelize(dbConfig);

const User = require('../models/User');

User.init(connection);

module.exports = connection;