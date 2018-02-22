const Table = require('cli-table')
const Chalk = require('chalk')

class AddressView {
  constructor() {

  }

  static showAddress(data){
    let t = new Table({
      head:['ID.','Street','City','Zip Code']
    })
      for(let i = 0;i<data.length;i++){
        t.push(
          [Chalk.blue(`${data[i].dataValues.id}`),Chalk.blue(`${data[i].dataValues.street}`),Chalk.grey(`${data[i].dataValues.city}`),Chalk.grey(`${data[i].dataValues.zip_code}`)]
        )
      }
      console.log(t.toString());
    }
}


module.exports = AddressView
