'use strict';
module.exports = (sequelize, DataTypes) => {
  const SecLevels = sequelize.define('SecLevels', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    levelName: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          msg: "Name can not be blank. Please insert a Name"
        }
      }
    },
    secLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          msg: "Please select the appropriate level for this user. 1: User, 2: Manager, 3: Org Super User, 4: Super User"
        }
      }
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
  SecLevels.associate = function(models) {
    // associations can be defined here
    SecLevels.hasMany(models.Users, {foreignkey: 'level'})
  };
  return SecLevels;
};