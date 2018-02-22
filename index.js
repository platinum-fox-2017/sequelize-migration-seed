const ControllerContact = require('./ControllerContact')
class Index{
    constructor(){}
    static contact(data){
        if(data[0] === 'add'){ 
            ControllerContact.add(data)
        }else if(data[0] === 'update'){
            ControllerContact.update(data)
        }
    }
}

let argv = process.argv.slice(2)
let command = argv[0]
let data = argv.slice(1)

switch(command){
    case 'contact':
        Index.contact(data)
        break;
}
