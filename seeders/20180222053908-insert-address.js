'use strict';
const fs = require('fs')

let data = fs.readFileSync('./addresses.csv','utf-8').split('\n')

const newArr = []

for(let i = 0; i < data.length; i++) {
  let newObj = {}
  if(data[i] !== '') {
    let splitted = data[i].split(',')
    newObj.street = splitted[1]
    newObj.city = splitted[2]
    newObj.zip_code = +splitted[3]
    newObj.createdAt = new Date()
    newObj.updatedAt = new Date()
    newArr.push(newObj)
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Addresses', newArr);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Addresses', null, {});
  }
};
