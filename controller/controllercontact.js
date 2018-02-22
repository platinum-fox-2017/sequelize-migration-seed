var model = require('../models/index.js')
var View = require('../view/homepage.js')

class ControllerContact {
  constructor(label,data) {

    this.data = data || ''
    this.run = this.run(label)
  }

  run(label){
    switch(label){
      case 'list':
      model.Contact.findAll({raw:true}).then(datas => {
        View.contact(datas)
      });
      break;
      case 'add':
      var value=[]
      var attributvalue = this.data.split(',')
      for (let i=0;i<attributvalue.length;i++){
        var sementara = attributvalue[i].split(':')
        value.push(sementara[1])
      }
      model.Contact.create({name:value[0],email:value[1],phone:value[2]}).then(datas => {
        View.contact(datas)
      })
      break;
      case 'update':
      var obj={}
        var pilah=this.data.split('-')
        var pilahkoma = pilah[0].split(',')
        for(let i=0;i<pilahkoma.length;i++){
          var pilahtitik = pilahkoma[i].split(':')
          switch(pilahtitik[0]){
            case 'name' : obj.name=pilahtitik[1];break;
            case 'email' : obj.email=pilahtitik[1];break;
            case 'phone' : obj.phone=pilahtitik[1];break;
          }
        }
        model.Contact.update(obj, { where: { id: Number(pilah[1])} }).then(function(){
        View.contact('berhasil')
        })
      break;
      case 'delete':
      model.Contact.destroy({ where: { id: this.data } }).then(function(){
      View.contact('berhasil')
      })
      break;
    }
  }
}

module.exports=ControllerContact
