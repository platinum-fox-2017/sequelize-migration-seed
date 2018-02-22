const {Contacts} = require('./models')

class Controller{
    constructor(){}

    static add(data){
        console.log(data)
        let obj = {
            name: data[1],
            email: data[2],
            phone: data[3]
        }

        Contacts.create(obj,{raw:true}).then((hasil)=>{
            console.log(hasil.dataValues)
            proces.exit()
        })
    }

    static update(data){
        let idContact = Number(data[1])
        let obj = {}
        for(let i = 2; i < data.length; i++){
            let each = data[i].split(" ")
            obj[each[0]] = each[1]
        }
        Contacts.update(obj,{where:{id: idContact}}).then(result=>{
            Contacts.findById(idContact).then(dataJustUpdate=>{
                console.log(dataJustUpdate.dataValues)
                process.exit()
            })
        })
    }

    static delete(data){
        let idContact = Number(data[1])
        Contacts.destroy(idContact).then(result=>{
            console.log(result)
            Contacts.findAll({raw:true}).then(datasAll=>{
                console.log(datasAll)
                process.exit()
            })
        })
    }
}

module.exports = Controller