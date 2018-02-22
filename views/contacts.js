const Table = require('cli-table');

class Contacts {
  constructor() {

  }
  static showData(data){
    let table = new Table({
    head: ['ID', 'Name', 'Email', 'Phone'],
    colWidths: [5, 20, 30, 15]
    })
    for(let i=0; i<data.length; i++){
      table.push([data[i].id, data[i].name, data[i].email, data[i].phone])
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

module.exports = Contacts;
