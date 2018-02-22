'use strict';
module.exports = (sequelize, DataTypes) => {
  var Addresses = sequelize.define('Addresses', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Addresses;
};