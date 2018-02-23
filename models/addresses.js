'use strict';
const Op = require('sequelize').Op
module.exports = (sequelize, DataTypes) => {
  var Addresses = sequelize.define('Addresses', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    idContact: DataTypes.INTEGER
  }, {
    classMethods: {
    }
  });
  Addresses.associate = function(models) {
    Addresses.belongsTo(models.Contacts,{
      foreignKey: 'idContact'
    })
  }

  Addresses.north = function(){
    return new Promise((resolve,reject)=>{
      this.findAll({
        where:{
          zip_code:{
            [Op.gte]: 50000,
          }
        }
      }).then((data)=>{
        resolve(JSON.parse(JSON.stringify(data)))
      })
    })
  }

  Addresses.south = function(){
    return new Promise ((resolve,reject)=>{
      this.findAll({
        where:{
          zip_code:{
            [Op.lt]: 50000,
          }
        }
      }).then(data=>{
        resolve(JSON.parse(JSON.stringify(data)))
      })
    })
  }

  Addresses.prototype.testMethod = function (){
    return `Alamat Lengkap: ${this.street}-${this.city}-${this.zip_code}`
  }
  return Addresses;
};