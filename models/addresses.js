'use strict';
module.exports = (sequelize, DataTypes) => {
  var addresses = sequelize.define('addresses', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return addresses;
};