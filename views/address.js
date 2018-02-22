const Table = require('cli-table')
const chalk = require('chalk')

class AddressView {
    static display (data){
        console.log(data)
        let table = new Table ({
            head: Object.keys(data[0]),
            colWidths: [5, 30, 20, 10, 42, 42]
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

module.exports = AddressView