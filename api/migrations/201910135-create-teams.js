'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      teamName: {
        type: Sequelize.STRING
      },
      TeamManager: {
        type: Sequelize.UUID,
        references:{
          model: 'Users',
          id: 'id'
        }
      },
      OrgId: {
        type: Sequelize.UUID,
      },
      LocationId: {
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teams');
  }
};