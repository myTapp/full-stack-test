'use strict';

const encryptor = require("./../../src/utils/Encryptor");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     const password = await encryptor.encrypt("admin");

     await queryInterface.bulkInsert('users', [{
        name: 'Admin',
        email: "admin@gmail.com",
        password: password
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
