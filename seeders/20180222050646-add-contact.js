'use strict';
const fs = require('fs')

let data = fs.readFileSync('./contacts.csv','utf-8').split('\n')

const newArr = []

for(let i = 0; i < data.length; i++) {
  let newObj = {}
  if(data[i] !== '') {
    let splitted = data[i].split(',')
    newObj.name = splitted[1]
    newObj.email = splitted[2]
    newObj.phone = splitted[3]
    newObj.createdAt = new Date()
    newObj.updatedAt = new Date()
    newArr.push(newObj)
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Contacts', newArr);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Contacts', null, {});
  }
};
