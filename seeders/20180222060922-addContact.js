'use strict';

const fs = require('fs')

var dataContact = fs.readFileSync('./contacts.csv').toString().trim().split("\n")

var arrContact = []
for (var i = 0; i < dataContact.length; i++) {
  let data = dataContact[i].split(',')
  var obj = {}
  for (var j = 0; j < data.length; j++) {
    obj['name'] = data[1]
    obj['email'] = data[2]
    obj['phone'] = data[3]
    obj['createdAt'] = new Date()
    obj['updatedAt'] = new Date()
  }
  arrContact.push(obj)
}
// console.log(arrContact)

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correobj['createdAt'] = new Date()
        obj['updatedAt'] = new Date()ctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Contacts', arrContact);

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