// import { readFileSync } from 'fs';

const fs = require('fs')

let address = new Promise((resolve, reject) => {
    fs.readFile('addresses.csv', 'utf8', (err, data) => {
      if (err) reject(err)
      else {
        let arr = data.trim().split('\n').map(x => x.split(','))
        let header = ['id', 'street', 'city', 'zipCode']
        let result = []
        for (let i = 0; i < arr.length; i++){
            let obj = {}
            for (let j = 0; j < arr[i].length; j++){
                obj[header[j]] = arr[i][j]
            }
            obj.createdAt = new Date()
            obj.updatedAt = new Date()
            result.push(obj)
            }
        resolve(result)
      }
    })
  })
// let test2 = []
address.then(res => console.log(res)).catch(err => err)

// console.log(test)
