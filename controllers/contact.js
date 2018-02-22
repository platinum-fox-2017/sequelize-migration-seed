const models = require('../models')
const view = require('../views/contact.js')

class ContactController {
    static run(command, options){
        // console.log(command)
        switch(command){
            case 'list':
                models.Contact.findAll({raw: true})
                    .then(data => view.display(data))
                    .catch(err => view.log(err))
                break
            case 'add': 
                let addName = options[0]
                let addEmail = options[1]
                let addPhone = options[2]
                models.Contact.create({name:addName, email:addEmail, phone:addPhone})
                    .then(task => view.log(task))
                    .catch(err => view.log(err))
                break
        }
    }
}

module.exports = ContactController