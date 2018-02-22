const Table = require('cli-table')
const chalk = require('chalk')

class ContactView {
    static display (data){
        let table = new Table ({
            head: Object.keys(data[0]),
            colWidths: [5, 30, 30, 30, 30, 30]
        })
        for (let i = 0; i < data.length; i++){
            table.push(Object.values(data[i]))
        }
        console.log(chalk.bgWhite(chalk.blue(table.toString())))
    }
    static log(data){
        console.log(data)
    }
}

module.exports = ContactView