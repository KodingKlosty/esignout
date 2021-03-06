'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define('Teams', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          msg: "Name can not be blank. Please insert a Name"
        }
      }
    },
    OrgId: {
      type: DataTypes.UUIDV4,
      validation: {
        notNull: {
          msg: "Org ID wasn't assigned by the server"
        }
      }
    },
    TeamManager: {
      type: DataTypes.UUIDV4,
      validation: {
        notNull: {
          msg: "Please Select a Team Manager"
        }
      }
    },
    LocationId: {
      type: DataTypes.UUIDV4,
      allowNull: true,
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
  Teams.associate = function(models) {
    // associations can be defined here
    Teams.hasMany(models.Users);
    Teams.belongsTo(models.Orgs);
  };
  return Teams;
};

/*

    */