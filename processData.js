const fs = require('fs')
class Address {
    constructor(){}
    static parseData(data){
    let datas = fs.readFileSync (data,'UTF-8')
    let split = datas.split("\n")
    const hasilRead = split.map(each=>{
        return each.split(",")
    })
    let array = []
        for(let i = 1; i < hasilRead.length;i++){
            let obj = {}
            for(let j = 1; j < hasilRead[i].length; j++){
                obj[hasilRead[0][j]] = hasilRead[i][j].trim()
                if(j === hasilRead[i].length - 1){
                    obj['createdAt'] = new Date()
                    obj['updatedAt'] = new Date()
                }
            }
            array.push(obj)
        }
        return array   
    }
}

module.exports = Address