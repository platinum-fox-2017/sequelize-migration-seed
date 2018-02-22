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
   let arr = fs.readFileSync('./contacts.csv', 'utf8').trim().split('\n').map(x => x.split(','))
   let header = ['name', 'email', 'phone']
   let result = []
   for (let i = 0; i < arr.length; i++){
        let obj = {}
        obj.name = arr[i][1]
        obj.email = arr[i][2]
        obj.phone = arr[i][3]
        obj.createdAt = new Date()
        obj.updatedAt = new Date()
        result.push(obj) 
   }
   console.log(result)
   return queryInterface.bulkInsert('Contacts', result, {})
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
