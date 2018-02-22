const ContactController = require('./controllers/contact')
const AddressController = require('./controllers/address')

const argv = process.argv;
let command = argv[2].split(':');
if (command[0] == 'contacts') {
    ContactController.run(command[1], argv.slice(3));
} else if (command[0] == 'address') {
    AddressController.run(command[1], argv.slice(3));
}

