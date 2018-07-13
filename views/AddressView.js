const Table = require('cli-table')

class AddressView {
    static listView(data) {
        var table = new Table({
            head: ['id', 'street', 'city', 'zip_code']
        });

        for (let i = 0; i < data.length; i++) {
            let arrData = []
            arrData.push(data[i].id);
            arrData.push(data[i].street);
            arrData.push(data[i].city);
            arrData.push(data[i].zip_code);
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

module.exports = AddressView;