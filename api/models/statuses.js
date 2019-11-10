'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    statusName: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          msg: "Name can not be blank. Please insert a Name"
        }
      }
    },
    statusMessage: {
      type: DataTypes.STRING,
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
  Status.associate = function(models) {
    // associations can be defined here
    Status.hasMany(models.Users, {foreignkey: 'status'})
  };
  return Status;
};