const models = require('../models')
const view = require('../views/contact.js')

class AddressController {
    static run(command, options){
        switch(command){
            case 'list':
                models.Address.findAll({raw: true})
                    .then(data => view.display(data))
                    .catch(err => view.log(err))
                break
            case 'add': 
                let addStreet = options[0]
                let addCity = options[1]
                let addZipCode = options[2]
                models.Address.create({street:addName, city:addCity, zipCode:addZipCode})
                    .then(task => view.log(task))
                    .catch(err => view.log(err))
                break
        }
    }
}

module.exports = AddressController