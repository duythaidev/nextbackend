'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'uwu1',
        email: 'example1@example.com',
        password: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'uwu2',
        email: 'example2@example.com',
        password: 'Lmao',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'uwu3',
        email: 'example3@example.com',
        password: 'UwU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
