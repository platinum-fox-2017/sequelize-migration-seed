'use strict'
const {Contact,Address} = require('../models')
const View = require('../views');

class Controller_address {

  static getCommand ( command,input ) {
    if( command === 'list' ) {
      Address.findAll()
      .then(addresses => {
        let arrOfaddress = []
        addresses.forEach(address => {
          arrOfaddress.push(address.dataValues)
        })
        View.show(arrOfaddress)
        process.exit()
      })
      .catch(err => {
        console.log(err);
      })
    } else if ( command === 'add' ) {
    let objAddress = {}
    objAddress.name = input[0]
    objAddress.email = input[1]
    objAddress.phone = input[2]
      Address.create(objAddress)
      .then(address => {
        View.show(`Successfully add into Addresses`);
        process.exit()
      })
      .catch(err => {
        console.log(err);
      })
    } else if ( command === 'update' ) {
      let objAddress = {}
      objAddress[input[1]] = input[2]
      Address.update(objAddress,{
        where: {id: +input[0]}
      })
      .then(address => {
        View.show(`Update success`);
        process.exit()
      })
      .catch(err => {
        console.log(err);
      })
    } else if ( command === 'delete') {
      Address.destroy({
        where: {id: +input}
      })
      .then(address => {
        View.show(`Delete success`)
        process.exit()
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}

module.exports = Controller_address
