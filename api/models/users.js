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
          msg: "Name can not be blank. Please insert a Name"
        } 
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Username is already in use"
      },
      allowNull: false,
      validation: {
        notNull: {
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
      validation: {
        args: true,
        msg: "A security level was not defined."
      }
    },
    LocationId:{
      type: DataTypes.UUIDV4,
      allowNull: true,
      validation: {
        args: true,
        msg: "A LocationId was not defined."
      }
    },
    StatusId: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      validation: {
        args: true,
        msg: "A Status was not defined."
      }
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