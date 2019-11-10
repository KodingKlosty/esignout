'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orgs = sequelize.define('Orgs', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      orgName: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
          notNull: {
            args: true,
            msg: "Name can not be blank. Please insert a Name"
          }
        }
      },
      SuperUser: {
        type: DataTypes.UUID,
        allowNull: false,
        validation: {
          notNull: {
            args: true,
            msg: "Superuser can not be blank. Please select a Superuser"
          },
        },    
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {});
  Orgs.associate = function(models) {
    // associations can be defined here
    Orgs.hasMany(models.Teams);
    Orgs.hasMany(models.Users);
  };
  return Orgs;
};