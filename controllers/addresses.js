const {addresses} = require('../models');
const view = require('../views/addresses.js');

class Addresses {
  constructor() {

  }
  static list(){
    addresses.findAll().then(data => {
      let result = []
      for(let i=0; i<data.length; i++){
        result.push(data[i].dataValues)
      }
      view.showData(result)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static add(data){
    addresses.create({
      street : data[0],
      city : data[1],
      zip_code : data[2]
    }).then(data => {
      view.showAdd(data)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static update(data){
    let obj = {}
    obj[data[1]] = data[2]
    addresses.update(obj, {
      where:{
        id : data[0]
      }
    }).then(result => {
      view.showUpdate(data)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static delete(data){
    addresses.destroy({where: {id : data}
    }).then(result => {
      view.showDelete(data)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
}

module.exports = Addresses;
