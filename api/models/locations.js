'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    locationName: DataTypes.STRING,
    OrgId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      validation: {
        notNull: {
          msg: "Please enter a name"
        }
      }
    },
  }, {});
  Locations.associate = function(models) {
    // associations can be defined here
    Locations.hasMany(models.Users, {foreignkey: 'location' });
  };
  return Locations;
};

//copy over successful please delete me
