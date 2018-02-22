'use strict';

const fs = require('fs')
var dataAddress = fs.readFileSync('./addresses.csv').toString().trim().split("\n")

var arrAddress = []
for(var i=0; i<dataAddress.length; i++){
    let data = dataAddress[i].split(',')
    var obj = {}
    for(var j=0; j<data.length; j++){
        obj['street'] = data[1]
        obj['city'] =  data[2]
        obj['zip_code'] = data[3]
        obj['createdAt'] = new Date()
        obj['updatedAt'] = new Date()
    }
    arrAddress.push(obj)
}

console.log(arrAddress)
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Addresses', arrAddress , {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
