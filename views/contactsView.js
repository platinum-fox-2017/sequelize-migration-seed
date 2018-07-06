const Table = require('cli-table')
const Chalk = require('chalk')

class ContactView {
  constructor() {

  }

  static showContact(data){
    let t = new Table({
      head:['ID.','Street','City','Zip Code']
      // ,colWidths: [5,15,30,30]
    })
      for(let i = 0;i<data.length;i++){
        t.push(
          [Chalk.blue(`${data[i].dataValues.id}`),Chalk.blue(`${data[i].dataValues.name}`),Chalk.grey(`${data[i].dataValues.email}`),Chalk.grey(`${data[i].dataValues.phone}`)]
        )
      }
      console.log(t.toString());
    }
}


module.exports = ContactView
