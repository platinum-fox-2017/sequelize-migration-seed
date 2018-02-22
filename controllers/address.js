const { Address } = require('../models')
const AddressView = require('../views/address')

class AddressController {
    static showAll() {
        Address.findAll().then((datas) => {
            AddressView.showAll(datas)
        })
    }

    static addAddress(street, city, zip) {
        Address.create({
            street: street,
            city: city,
            zip_code: zip
        }).then(() => {
            console.log('created')
            process.exit()
        }).catch((err) => {
            console.log(err)
        })
    }

    static updateAddress(id, coloumn) {
        console.log(coloumn[2])
        console.log(typeof coloumn[2])
        console.log(parseInt(coloumn[2]))
        Address.findById(id).then((data) => {
            Address.update(
                {
                    street: (coloumn[0] === '') ? data.dataValues.street : coloumn[0],
                    city: (coloumn[1] === '') ? data.dataValues.city : coloumn[1],
                    zip_code: (coloumn[2] === '') ? data.dataValues.zip_code : coloumn[2]
                },
                {
                    where: {
                        id: id
                    }
                }).then(() => {
                    console.log('BERHASIL')
                    process.exit()
                })
        }).catch((err) => {
            console.log(err)
        })
    }

    static deleteAddress(id) {
        Address.destroy({
            where: {
                id: id
            }
        }).then(() => {
            console.log('deleted')
            process.exit()
        }).catch((err) => {
            console.log(err)
        })
    }
}
module.exports = AddressController