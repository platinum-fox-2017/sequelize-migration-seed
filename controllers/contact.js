'use strict'
const {Contact,Address} = require('../models')
const View = require('../views');

class Controller_contact {

  static getCommand ( command,input ) {
    if( command === 'list' ) {
      Contact.findAll()
      .then(contacts => {
        let arrOfcontact = []
        contacts.forEach(contact => {
          arrOfcontact.push(contact.dataValues)
        })
        View.show(arrOfcontact)
        process.exit()
      })
      .catch(err => {
        console.log(err);
      })
    } else if ( command === 'add' ) {
    let objContact = {}
    objContact.name = input[0]
    objContact.email = input[1]
    objContact.phone = input[2]
      Contact.create(objContact)
      .then(contact => {
        View.show(`Successfully add into Contacts`);
        process.exit()
      })
      .catch(err => {
        console.log(err);
      })
    } else if ( command === 'update' ) {
      let objContact = {}
      objContact[input[1]] = input[2]
      Contact.update(objContact,{
        where: {id: +input[0]}
      })
      .then(contact => {
        View.show(`Update success`);
        process.exit()
      })
      .catch(err => {
        console.log(err);
      })
    } else if ( command === 'delete') {
      Contact.destroy({
        where: {id: +input}
      })
      .then(contact => {
        View.show(`Delete success`)
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}

module.exports = Controller_contact;
