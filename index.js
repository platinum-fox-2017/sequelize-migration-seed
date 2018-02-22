var ControllerContact = require('./controller/controllercontact.js')
var ControllerAddress = require('./controller/controlleraddress.js')

let argv = process.argv
var simpan = argv[2].split(':')
switch(simpan[0]){
  case 'contacts':
  var run = new ControllerContact(simpan[1],argv[3])
  break;
  case 'addresses':
  var run = new ControllerAddress(simpan[1],argv[3])
  break;
}
