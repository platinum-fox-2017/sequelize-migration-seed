const {Addresses} = require('./models')

class Controller{
    constructor(){}

    static add(data){
        let obj = {
            street: data[0],
            city: data[1],
            zip_code: data[2],
            idContact: Number(data[3])
        }

        Addresses.create(obj,{raw:true}).then(result=>{
            console.log(result)
            process.exit()
        })
    }

    static update(data){
        let idAddress = Number(data[1])
        let obj = {}
        for(let i = 2; i < data.length; i++){
            let each = data[i].split(" ")
            if(each[0] === 'idContact'){
                obj[each[0]] = Number(each[1])
            }else{
                obj[each[0]] = each[1]
            }
        }

        Addresses.update(obj,{where:{id:idAddress}}).then(result=>{
            Addresses.findAll({raw:true}).then(dataAll=>{
                console.log(dataAll)
                process.exit()
            })
        })
    }

    static delete(data){
        let idAddress = Number(data[1])
        Addresses.destroy({where:{id:idAddress}}).then(()=>{
            Addresses.findAll({raw:true}).then(datas=>{
                console.log(datas)
                process.exit()
            })
        })
    }

    static viewFullAddress(data){
        let idAddress = Number(data[1])
        Addresses.findById(idAddress,{}).then(data=>{
            console.log(data.testMethod())
            process.exit()
        })
    }

    static getNorthArea(){
        let north = Addresses.north()
        north.then((data)=>{
            console.log(data)
            process.exit()
        })
    }

    static getSouthArea(){
        let south = Addresses.south()
        south.then(data=>{
            console.log(data)
            process.exit()
        })
    }
}

module.exports = Controller