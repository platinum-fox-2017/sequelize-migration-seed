'use strict';
const fs = require('fs')
let readContact = fs.readFileSync('contacts.csv','utf-8')
// console.log(readContact.split('\n'))
let splitContact = readContact.split('\n')
let arr =[]
  for(let i=0;i<splitContact.length;i++){
  let split = splitContact[i].split(',')
  let obj = {}
  for(let j=0;j<split.length;j++){
    obj.name = split[1]
    obj.email = split[2]
    obj.phone = split[3]
    obj.createdAt = new Date()
    obj.updatedAt = new Date()
  }
  arr.push(obj)
  }
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
   return queryInterface.bulkInsert('contacts',arr, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('contacts', null, {});
  }
};
