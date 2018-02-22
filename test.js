const fs = require('fs')

var dataContact = fs.readFileSync('./contacts.csv').toString().trim().split("\n")

var arrContact = []
for(var i=0; i<dataContact.length; i++){
    let data = dataContact[i].split(',')
    var obj = {}
    for(var j=0; j<data.length; j++){
        obj['name'] = data[1]
        obj['email'] =  data[2]
        obj['phone'] = data[3]
    }
    arrContact.push(obj)
}

//  console.log(arrContact)


var dataAddress = fs.readFileSync('./addresses.csv').toString().trim().split("\n")

var arrAddress = []
for(var i=0; i<dataAddress.length; i++){
    let data = dataAddress[i].split(',')
    var obj = {}
    for(var j=0; j<data.length; j++){
        obj['street'] = data[1]
        obj['city'] =  data[2]
        obj['zip_code'] = data[3]
        obj['createdAt'] = new Date()
        obj['updatedAt'] = new Date()
    }
    arrAddress.push(obj)
}

console.log(arrAddress)