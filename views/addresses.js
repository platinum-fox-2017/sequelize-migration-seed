const Table = require('cli-table');

class Addresses {
  constructor() {

  }
  static showData(data){
    let table = new Table({
    head: ['ID', 'Street', 'City', 'Zip Code'],
    colWidths: [5, 30, 20, 10]
    })
    for(let i=0; i<data.length; i++){
      table.push([data[i].id, data[i].street, data[i].city, data[i].zip_code])
    }
    console.log(table.toString())
  }
  static showAdd(data){
    console.log('Data berikut berhasil ditambahkan')
    console.log(data)
  }
  static showUpdate(data){
    console.log('Data dengan ID: '+data[0]+' berhasil diubah')
    console.log(data[1]+' : '+data[2])
  }
  static showDelete(data){
    console.log('Data dengan ID: '+data+' berhasil dihapus');
  }
}

module.exports = Addresses;
