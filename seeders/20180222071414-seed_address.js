'use strict';
const fs = require('fs')
let readAddr = fs.readFileSync('addresses.csv','utf-8')
let splitAdd = readAddr.split('\n')
let arrAddress = []
for(let i=0;i<splitAdd.length;i++){
  if(splitAdd[i] !== ''){
    let obj = {}
    let detail = splitAdd[i].split(',')
    for(let j=0;j<detail.length;j++){
      obj.street = detail[1]
      obj.city = detail[2]
      obj.zip_code = detail[3]
      obj.createdAt = new Date()
      obj.updatedAt = new Date()
    }
    arrAddress.push(obj)
  }  
}
// console.log(arrAddress)
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
   return queryInterface.bulkInsert('addresses',arrAddress, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('addresses', null, {});
  }
};
