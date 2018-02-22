const fs = require('fs')
let data = fs.readFileSync('./contacts.csv','utf8').split('\n')
let arr =[]
let obj = {}
for(let i =0; i<data.length; i++){
    let a = data[i].split(",")
    for(let j=1; j<a.length; j++ ){
       obj = {
            aa : a[0],
            bb : a[1]
       }
    }
    arr.push(obj)
}
console.log(arr)