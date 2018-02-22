'use strict';
const fs = require('fs')


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
    let arr = fs.readFileSync('./addresses.csv', 'utf8').trim().split('\n').map(x => x.split(','))
    let header = ['street', 'city', 'zipCode']
    let result = []
    for (let i = 0; i < arr.length; i++){
      let obj = {}
      obj.street = arr[i][1]
      obj.city = arr[i][2]
      obj.zipCode = arr[i][3]
      obj.createdAt = new Date()
      obj.updatedAt = new Date()
      result.push(obj)
    }  
    return queryInterface.bulkInsert('Addresses', result, {})
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
