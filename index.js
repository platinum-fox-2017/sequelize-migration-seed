"use strict"
const ContactsController = require('./controller/contact.js');
const AddressesController = require('./controller/address.js');

let argv = process.argv;

let command = argv[2].split(':')[0];
let option = argv[2].split(':').slice(1).concat(argv.slice(3));

// console.log(command, option);

switch(command) {
    case 'contact':
        ContactsController.readCommand(option);
        break;
    case 'address':
        AddressesController.readCommand(option);
        break;
    default:
        break;
}