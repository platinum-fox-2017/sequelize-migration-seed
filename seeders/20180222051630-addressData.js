'use strict';
const Address = require('../processData')
let csv = 'addresses.csv'
module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Addresses',Address.parseData(csv) );
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
