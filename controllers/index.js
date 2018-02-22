const ContactController = require('./contact');

class MainController {
  static routeCommand(command, options){
    if (command.search('contacts') >= 0) {
      ContactController.main(command,options);
    }
  }
}
module.exports = MainController;
