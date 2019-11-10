'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SecLevels', [{
        id: '0a65ee76-629e-4de6-99ef-fca597673408' ,
        levelName: 'End-User',
        secLevel: 1,
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        id: 'f3786d08-b8ac-45b7-9e5a-a096be8e970f',
        levelName: 'Manager',
        secLevel: 2,
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
       },
      {
        id: '1b8a6f30-fffc-4220-bbc7-c046d47e0ee9',
        levelName: 'Administrator',
        secLevel: 3,
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        id: '4d1d1186-c3ad-4475-bab6-5a67b7b3d60c',
        levelName: 'Super User',
        secLevel: 4,
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('SecLevels', null, {});
  }
};
