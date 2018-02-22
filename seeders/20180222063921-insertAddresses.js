'use strict';
const fs = require('fs');
var addresses = fs.readFileSync('./addresses.csv','utf8').split('\n');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let arrayOfAddress = [];
    for(let i=0; i<addresses.length; i++){
      let address = addresses[i].split(',');
      let jalan = address[1];
      let kota = address[2];
      let kodePos = address[3];
      let waktuSekarang = new Date();
      let updateNanti = new Date();
      arrayOfAddress.push({street:jalan,city:kota,zip_code:kodePos,createdAt:waktuSekarang,updatedAt:updateNanti});
    }
    return queryInterface.bulkInsert('Addresses',arrayOfAddress,{});
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
