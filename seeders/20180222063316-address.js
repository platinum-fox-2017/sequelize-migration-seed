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
    let data = fs.readFileSync('./addresses.csv', 'UTF-8');
    let dataArr = data.trim().split('\n');
    let arrToWrite = [];
    for(let i=0; i<dataArr.length; i++){
      let row = dataArr[i].split(',');
      arrToWrite.push({
        street: row[1],
        city: row[2],
        zip_code: row[3],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Addresses', arrToWrite, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
