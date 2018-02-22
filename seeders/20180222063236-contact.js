'use strict';
const fs = require('fs');

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
    let data = fs.readFileSync('./contacts.csv', 'UTF-8');
    let dataArr = data.trim().split('\n');
    let arrToWrite = [];
    for(let i=0; i<dataArr.length; i++){
      let row = dataArr[i].split(',');
      arrToWrite.push({
        name: row[1],
        email: row[2],
        phone: row[3],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Contacts', arrToWrite, {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Contacts', null, {});
    */
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};