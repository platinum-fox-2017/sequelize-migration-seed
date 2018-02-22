const argv = process.argv

const contact = require('./controllers/contact.js')
const address = require('./controllers/address.js')

class Start {
    static run (){
        let type = argv[2].split(':')[0];
        let command = argv[2].split(':')[1];
        let options = argv.splice(3)
        switch (type){
            case 'contacts': contact.run(command, options); break;
            case 'addresses': address.run(command, options); break;
        }
    }
}

Start.run()