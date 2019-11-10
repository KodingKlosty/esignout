'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Locations', [{
        id: 'fd42f36e-0b81-4eae-b508-8628e73df0dc',
        locationName: 'Test Location',
        OrgId: '8d5a519c-5e04-4be7-9c9a-a80250e5df66',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Locations', null, {});
  }
};
