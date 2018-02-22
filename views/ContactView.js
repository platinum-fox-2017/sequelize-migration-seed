const Table = require('cli-table')

class ContactView {
    static listView(data) {
        var table = new Table({
            head: ['id', 'name', 'email', 'phone']
        });

        for (let i = 0; i < data.length; i++) {
            let arrData = []
            arrData.push(data[i].id);
            arrData.push(data[i].name);
            arrData.push(data[i].email);
            arrData.push(data[i].phone);
            table.push(arrData)
        }
        console.log(table.toString());
    }

    static addView(data) {
        console.log("Berhasil menambahkan data : " + data);   
    }

    static updateView(id) {
        console.log("Data pada id ke - " + id + " berhasil di update !");
    }

    static deleteView(id) {
        console.log("Data pada id ke - " + id + " berhasil di hapus !");
    }

    static errorView(err) {
        console.log(err);
    }
}

module.exports = ContactView;