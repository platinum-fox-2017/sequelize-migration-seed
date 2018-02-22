const model = require('../models');
const view = require('../views');

class Controller {
    static run(command, option) {
        switch (command) {
            case 'list':
                model.Address.findAll({ raw: true })
                    .then(address => {
                        view.display(address);
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
                        case 'street': objToWrite.street = property[1];
                        case 'city': objToWrite.city = property[1];
                        case 'zip_code': objToWrite.zip_code = property[1];
                    }
                }
                model.Address.update(objToWrite, { where: { id: option[0] } })
                    .then(address => {
                        view.display(address);
                        process.exit();
                    })
                    .catch(err => {
                        view.display(err);
                        process.exit();
                    })
                break;
            case 'delete':
                model.Address.destroy({ where: { id: option[0] } })
                    .then(address => {
                        view.display(address);
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