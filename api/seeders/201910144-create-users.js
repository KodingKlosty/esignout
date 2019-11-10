'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      
      return queryInterface.bulkInsert('Users', [{
        id: 'eeb74274-9712-46a6-83b2-5cc76be26629',
        name: 'John Doe',
        username: 'JohnDoe123',
        password: 'password',
        OrgId: '8d5a519c-5e04-4be7-9c9a-a80250e5df66',
        TeamId: '82852088-854d-4ca8-b96f-ceaa91c3651e',
        SecLevelId: '0a65ee76-629e-4de6-99ef-fca597673408',
        LocationId: 'fd42f36e-0b81-4eae-b508-8628e73df0dc',
        StatusId: 'b9fa0d66-a356-4c19-8eda-f40b09ede733',
        slackToken: '',
        notes: 'End User',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'

      },
      {
        id: '30593030-ba73-4e90-8a2a-ac97d2b71dbb',
        name: 'Jane Doe',
        username: 'JaneDoe123',
        password: 'password!!@@',
        OrgId: '8d5a519c-5e04-4be7-9c9a-a80250e5df66',
        TeamId: '82852088-854d-4ca8-b96f-ceaa91c3651e',
        SecLevelId: '1b8a6f30-fffc-4220-bbc7-c046d47e0ee9',
        LocationId: 'fd42f36e-0b81-4eae-b508-8628e73df0dc',
        StatusId: 'b9fa0d66-a356-4c19-8eda-f40b09ede733',
        slackToken: '',
        notes: 'SuperUser',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        id: '9631a721-33d0-48b9-b03d-70ab6c6169ec',
        name: 'Johnny Bravo',
        username: 'JBravo',
        password: 'password!!',
        OrgId: '8d5a519c-5e04-4be7-9c9a-a80250e5df66',
        TeamId: '82852088-854d-4ca8-b96f-ceaa91c3651e',
        SecLevelId: 'f3786d08-b8ac-45b7-9e5a-a096be8e970f',
        LocationId: 'fd42f36e-0b81-4eae-b508-8628e73df0dc',
        StatusId: 'b9fa0d66-a356-4c19-8eda-f40b09ede733',
        slackToken: '',
        notes: 'Manager',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        id: '1b8a6f30-fffc-4220-bbc7-c046d47e0ee9',
        name: 'Major Glory',
        username: 'MajorG',
        password: 'password2!',
        OrgId: '8d5a519c-5e04-4be7-9c9a-a80250e5df66',
        TeamId: '82852088-854d-4ca8-b96f-ceaa91c3651e',
        SecLevelId: 'f3786d08-b8ac-45b7-9e5a-a096be8e970f',
        LocationId: 'fd42f36e-0b81-4eae-b508-8628e73df0dc',
        StatusId: 'b9fa0d66-a356-4c19-8eda-f40b09ede733',
        slackToken: '',
        notes: 'Administrator',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
