// node index.js contacts:update id column value
// node index.js contacts:delete id

const ContactControllers = require('./controllers/contact')

if (process.argv[2] === 'contacts:list') {
    ContactControllers.showAll()
} else if (process.argv[2] === 'contact:add') {
    ContactControllers.addContact(process.argv[3], process.argv[4], process.argv[5])
} else if (process.argv[2] === 'contact:update') {
    ContactControllers.updateContact(process.argv[3], process.argv[4].split(','))
} else if (process.argv[2] === 'contact:delete') {
    ContactControllers.deleteContact(process.argv[3])
}


