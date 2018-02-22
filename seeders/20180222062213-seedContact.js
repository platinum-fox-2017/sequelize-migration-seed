'use strict';

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
    const fs = require('fs')
    var data = fs.readFileSync('./contacts.csv','utf-8').trim().split('\n')
    var datas=[]
    for(let i=0;i<data.length;i++){
      var dataobj=data[i].split(',')
      var obj = {
        name:dataobj[1],
        email:dataobj[2],
        phone:dataobj[3],
        createdAt:new Date(),
        updatedAt: new Date()
      }
      datas.push(obj)
    }
    return queryInterface.bulkInsert('Contacts', datas, {});
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
