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
      references:{
        model: 'orgs',
        key: 'id',
        onDelete: 'CASCADE'
      }
    },
  }, {});
  Locations.associate = function(models) {
    // associations can be defined here
    Locations.hasMany(models.Users, {foreignkey: 'location' });
  };
  return Locations;
};