var model = require('../models/index.js')
var View = require('../view/homepage.js')

class ControllerAddress {
  constructor(label,data) {
    this.data = data || ''
    this.run = this.run(label)
  }

  run(label){
    switch(label){
      case 'list':
      model.Address.findAll({raw:true}).then(data => {
        View.address(data)
      });
      break;
      case 'add':
      var value=[]
      var attributvalue = this.data.split(',')
      for (let i=0;i<attributvalue.length;i++){
        var sementara = attributvalue[i].split(':')
        value.push(sementara[1])
      }
      model.Address.create({street:value[0],city:value[1],zip_code:value[2]}).then(datas => {
        View.address(datas)
      })
      break;
      case 'update':
      var obj={}
        var pilah=this.data.split('-')
        var pilahkoma = pilah[0].split(',')
        for(let i=0;i<pilahkoma.length;i++){
          var pilahtitik = pilahkoma[i].split(':')
          switch(pilahtitik[0]){
            case 'street' : obj.street=pilahtitik[1];break;
            case 'city' : obj.city=pilahtitik[1];break;
            case 'zip_code' : obj.zip_code=pilahtitik[1];break;
          }
        }
        model.Address.update(obj, { where: { id: Number(pilah[1])} }).then(function(){
        View.address('berhasil')
        })
      break;
      case 'delete':
      model.Address.destroy({ where: { id: this.data } }).then(function(){
      View.address('berhasil')
      })
      break;
    }
  }
}

module.exports=ControllerAddress
