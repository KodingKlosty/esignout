'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Orgs', [{
        id: '8d5a519c-5e04-4be7-9c9a-a80250e5df66',
        orgName: 'Test Org',
        SuperUser: '30593030-ba73-4e90-8a2a-ac97d2b71dbb',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Orgs', null, {});
  }
};
