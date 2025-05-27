'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('reservations', [
      {
        id: 1,
        userId: 1,
        spaceId: 1,
        startTime: new Date('2025-06-01T09:00:00Z'),
        endTime: new Date('2025-06-01T10:00:00Z'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        userId: 2,
        spaceId: 2,
        startTime: new Date('2025-06-02T14:00:00Z'),
        endTime: new Date('2025-06-02T15:30:00Z'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reservations', null, {});
  }
};
