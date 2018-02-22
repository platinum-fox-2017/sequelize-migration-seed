const Sequelize = require('sequelize');
const Models = require('../models');
const Views = require('../views/contacts');

class Controller_contacts{
    static add(new_contact){
        let object ={};
        object.name = new_contact[0];
        object.email = new_contact[1];
        object.phone = new_contact[2];
        Models.Contacts.create(object)
        .then((data)=> {
            Views.show(data.dataValues);
            process.exit();
        })
        .catch((err)=>{
            console.log(err);
            process.exit();
        });
    }
    static read_one(new_contact){
        Models.Contacts.findById(new_contact[0])
        .then((data)=>{
            Views.show(data.dataValues);
            process.exit();
        })
        .catch((err)=>{
            console.log(err);
            process.exit();
        });
    }
    static read_all(){
        Models.Contacts.findAll()
        .then((data)=>{
            data = data.map((v,i,a)=> {
                return v.dataValues;
            })
            Views.show_multiple(data);
            process.exit();
        })
        .catch((err)=>{
            console.log(err);
            process.exit();
        })
    }
    static update(new_contact){
        Models.Contacts.update({
            name: new_contact[1],
            email: new_contact[2],
            phone: new_contact[3]
        },{
            where: {
                id :new_contact[0]
            }
        })
        .then((data)=>{
            process.exit();
        })
    }
    static delete(new_contact){
        Models.Contacts.destroy({
            where:{
                id:new_contact[0]
            }
        })
        .then((data)=>{
            process.exit();
        })
    }
}

module.exports = Controller_contacts;