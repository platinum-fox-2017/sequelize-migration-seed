const View = require('../view/index.js');
const db = require('../models/index.js');


class Controller {
  constructor() {

  }

  static readCommands(argv) {
    // node index.js <identifier:command> <options>
    // list add update delete

    let code = argv[2].split(':');
    if (code.length < 2) {
      return console.log('please specify command with <tableName>:<command> format.');
    }
    let identifier = code[0];
    let command = code[1];
    let options = argv.slice(3);

    // console.log(code);
    if (identifier === 'addresses') {
      switch (command) {
        case 'add':
          Controller.addToAddresses(options);
          break;
        case 'list': // if had options for id list one
          Controller.listAddresses(options);
          break;
        case 'update':
          Controller.updateAddresses(options);
          break;
        case 'delete':
          Controller.deleteAddresses(options);
          break;
        default: console.log('No command specified');

      }
    } else if (identifier === 'contacts') {
      switch (command) {
        case 'add':
          Controller.addToContacts(options);
          break;
        case 'list': // if had options for id list one
          Controller.listContacts(options);
          break;
        case 'update':
          Controller.updateContacts(options);
          break;
        case 'delete':
          Controller.deleteContacts(options);
          break;
        default: console.log('No command specified');

      }
    } else {
      // error message
      console.log('command error');
    }

  }

  // ########### Addresses #########

  static addToAddresses(options){
    db.Address.create({
      street: options[0],
      city: options[1],
      zip_code: options[2]
    }).then(newAddress => {
      View.displayAddData(newAddress);
    });
  }

  static listAddresses(options){
    if (options[0]) {
      db.Address.findOne({
        where:{
          id : options[0]
        }
      }).then(foundAddress => {
        View.displayOneFound(foundAddress);
      })
    } else {
      db.Address.findAll({
      }).then(foundAddress => {
        View.displayManyFound(foundAddress);
      });
    }
  }

  static updateAddresses(options){
    db.Address.findOne({
      where:{
        id: options[0]
      }
    }).then(foundAddress => {
      let newProp = {};
      newProp[options[1]] = options[2];
      foundAddress.update(newProp);
      View.displayUpdate(foundAddress);
    });
  }

  static deleteAddresses(options){
    db.Address.findOne({
      where:{
        id : options[0]
      }
    }).then(foundAddress => {
      View.displayDestroyed(foundAddress);
      return foundAddress.destroy();
    });
  }

  // ########### Contacts ##########

  static addToContacts(options){
    db.Contact.create({
      name: options[0],
      email: options[1],
      phone: options[2]
    }).then(newContact => {
      View.displayAddData(newContact);
    });
  }

  static listContacts(options){
    if (options[0]) {
      db.Contact.findOne({
        where:{
          id : options[0]
        }
      }).then(foundContact => {
        View.displayOneFound(foundContact);
      })
    } else {
      db.Contact.findAll({
      }).then(foundContacts => {
        View.displayManyFound(foundContacts);
      });
    }
  }

  static updateContacts(options){
    db.Contact.findOne({
      where:{
        id: options[0]
      }
    }).then(foundContact => {
      let newProp = {};
      newProp[options[1]] = options[2];
      foundContact.update(newProp);
      View.displayUpdate(foundContact);
    });
  }

  static deleteContacts(options){
    db.Contact.findOne({
      where:{
        id : options[0]
      }
    }).then(foundContact => {
      View.displayDestroyed(foundContact);
      return foundContact.destroy();
    });
  }



}


module.exports = Controller;
