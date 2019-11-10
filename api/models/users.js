'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          msg: "Name can not be blank. Please insert a Name"
        } 
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validation: {
        notNull: {
          args: true,
          msg: "Username can not be blank. Please insert a Username"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validation: {
        len: {
          args: [8,256],
          msg: "Password must be at at least 8 characters long, but not longer than 256"
        }
      }
    },
    OrgId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    TeamId: {
      type: DataTypes.UUIDV4,
      allowNull: true,
    },
    SecLevelId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    LocationId:{
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    StatusId: {
      type: DataTypes.UUIDV4,
      allowNull: true,
    },
    slackToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.belongsTo(models.Teams);
    Users.belongsTo(models.Orgs);

  };
  return Users;
};