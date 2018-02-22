'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    // Contact.hasMany(Addresses, { foreignKey: 'uid' })
  };
  return Contact;
};
