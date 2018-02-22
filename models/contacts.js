'use strict';
module.exports = (sequelize, DataTypes) => {
  var contacts = sequelize.define('contacts', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return contacts;
};