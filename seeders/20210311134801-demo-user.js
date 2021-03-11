'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { firstName: 'John', lastName: 'Doe', email: 'example1@example.com', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Tom', lastName: 'K', email: 'example2@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Ander', lastName: 'J', email: 'example3@gmail.com', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
