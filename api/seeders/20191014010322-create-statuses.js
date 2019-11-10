'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Statuses', [{
        id: 'b9fa0d66-a356-4c19-8eda-f40b09ede733',
        statusName: 'Test Status',
        statusMessage: 'Test Status',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Statuses', null, {});
  }
};
