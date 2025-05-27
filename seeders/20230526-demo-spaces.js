'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('spaces', [
      {
        id: 1,
        name: 'Sala de reuniones A',
        description: 'Sala en primer piso',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Oficina 101',
        description: 'Oficina con vista al jardín',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('spaces', null, {});
  }
};
