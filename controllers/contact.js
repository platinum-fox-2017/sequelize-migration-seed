const { Contact } = require('../models');

class Controller {

    static parsingData(task, data) {
        if (task === 'list') {
            this.showList()
        } else if (task === 'add') {
            this.addData(data)
        } else if (task === 'update') {
            this.updateData(data)
        } else if (task === 'delete') {
            this.deleteData(data)
        }
    }

    static showList() {
        Contact.findAll({raw:true})
        .then(data => {
            console.log(data);
            process.exit()
        })
        .catch(err => {
            console.log(err);
            process.exit()
        })
    }

    static addData(data) {
        Contact.create({
            name: data[0],
            email: data[1],
            phone: data[2]
        })
        .then(data => {
            console.log(`Success Insert Data`)
            process.exit()
        })
        .catch(err => {
            console.log(err);
            process.exit()
        })
    }

    static updateData(data) {
        Contact.findById(data[0])
        .then(getData => {
            let getObject = Object.keys(getData.dataValues)
             for (let j = 1; j < data.length; j++) {
                let matchObj = data[j].split(':')
                if (matchObj[0] === 'name') {
                    console.log('masuk ke name')
                    getData.dataValues.name = matchObj[1]
                } else if (matchObj[0] === 'email') {
                    getData.dataValues.email = matchObj[1]
                } else if (matchObj[0] === 'phone') {
                    getData.dataValues.phone = matchObj[1]
                }
             }
             Contact.update({
                 name: getData.dataValues.name,
                 email: getData.dataValues.email,
                 phone: getData.dataValues.phone
             }, {
                 where: { id: getData.dataValues.id }
             })
             .then(data => {
                 console.log('Success Update Data');
                 process.exit()
             })
             .catch(err => {
                 console.log(err)
                 process.exit()
             })
        })
        .catch(err => {
            console.log(err)
        })
    }

    static deleteData(data) {
        Contact.destroy({
            where : {id: data[0]}
        })
        .then(data => {
            console.log(`Success Delete Data`)
            process.exit()
        })
        .catch(err => {
            console.log(err)
            process.exit()
        })
    }

}

module.exports = Controller