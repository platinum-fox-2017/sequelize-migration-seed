const model = require('../models');

class Controller {
    static run(command, option) {
        switch (command) {
            case 'list':
                model.Contact.findAll({ raw: true })
                    .then(contacts => {
                        view.display(contacts);
                        process.exit();
                    })
                    .catch(err => {
                        view.display(err);
                        process.exit();
                    })
                break;
            case 'update':
                let objToWrite = {};
                let propertyArr = option[1].split(',');
                for (let i = 0; i < propertyArr.length; i++) {
                    let property = propertyArr[i].split(':');
                    switch (property[0]) {
                        case 'name': objToWrite.name = property[1];
                        case 'email': objToWrite.email = property[1];
                        case 'phone': objToWrite.phone = property[1];
                    }
                }
                model.Contact.update(objToWrite, { where: { id: option[0] } })
                    .then(contacts => {
                        view.display(contacts);
                        process.exit();
                    })
                    .catch(err => {
                        view.display(err);
                        process.exit();
                    })
                break;
            case 'delete':
                model.Contact.destroy({ where: { id: option[0] } })
                    .then(contacts => {
                        view.display(contacts);
                        process.exit();
                    })
                    .catch(err => {
                        view.display(err);
                        process.exit();
                    })
        }
    }
}
module.exports = Controller;