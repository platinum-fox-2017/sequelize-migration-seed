'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contacts = sequelize.define('Contacts', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      
    }
  });

  Contacts.associate = function(models) {
    Contacts.hasMany(models.Addresses,{
      foreignKey: 'idContact'
    })
  }
  return Contacts;
};