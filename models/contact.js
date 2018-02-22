'use strict';
module.exports = (sequelize, DataTypes) => {
  var contact = sequelize.define('contact', {
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
  return contact;
};