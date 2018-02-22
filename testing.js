const fs = require('fs')

let data = fs.readFileSync('./contacts.csv','utf-8').split('\n')

const newArr = []

for(let i = 0; i < data.length; i++) {
  let newObj = {}
  if(data[i] !== '') {
    let splitted = data[i].split(',')
    newObj.id = +splitted[0]
    newObj.name = splitted[1]
    newObj.email = splitted[2]
    newObj.phone = splitted[3]
    newArr.push(newObj)
  }
}
console.log(newArr)
