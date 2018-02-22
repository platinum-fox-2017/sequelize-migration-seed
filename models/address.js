'use strict';
module.exports = (sequelize, DataTypes) => {
  var address = sequelize.define('address', {
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
  return address;
};