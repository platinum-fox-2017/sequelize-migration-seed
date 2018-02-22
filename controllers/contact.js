const {Contact} = require('../models')
const View_contact = require('../views/contact')

Contact.findAll().then(dataAll=>{
  console.log(dataAll)
})
class Controller_contact{
  constructor(){

  }
  static command(order,input){
    console.log(order,'-----------------')
    if(order === 'list'){
      Contact.findAll().then(dataAll=>{
        console.log(dataAll)
      })
    }
  }

}

module.exports = Controller_contact