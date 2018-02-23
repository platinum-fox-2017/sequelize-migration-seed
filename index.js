const ControllerContact = require('./ControllerContact')
const ControllerAddress = require('./ControllerAddress')

class Index{
    constructor(){}
    static contact(data){
        if(data[0] === 'add'){ 
            ControllerContact.add(data)
        }else if(data[0] === 'update'){
            ControllerContact.update(data)
        }else if(data[0] === 'delete'){
            ControllerContact.delete(data)
        }
    }

    static address(data){
        if(data[0] === 'add'){
            ControllerAddress.add(data)
        }else if(data[0] === 'update'){
            ControllerAddress.update(data)
        }else if(data[0] === 'delete'){
            ControllerAddress.delete(data)
        }else if(data[0] === 'full:address'){
            ControllerAddress.viewFullAddress(data)
        }else if(data[0] === 'north-area'){
            ControllerAddress.getNorthArea()
        }else if(data[0] === 'south-area'){
            ControllerAddress.getSouthArea()
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
    case 'address':
        Index.address(data)
        break;
}
