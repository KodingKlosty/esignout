'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teams', [{
        id: '82852088-854d-4ca8-b96f-ceaa91c3651e',
        teamName: 'Test Team',
        TeamManager: '30593030-ba73-4e90-8a2a-ac97d2b71dbb',
        OrgId: '8d5a519c-5e04-4be7-9c9a-a80250e5df66',
        LocationId: 'fd42f36e-0b81-4eae-b508-8628e73df0dc',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Teams', null, {});
  }
};
