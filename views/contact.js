class ContactView {

    static showAll(datas) {
        datas.map((data) => {
            console.log(data.dataValues);
        })
        process.exit()
    }

}

module.exports = ContactView