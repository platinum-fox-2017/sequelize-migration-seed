'use strict';

const model = require("../models");
const View = require("../views");

class Control {
	static main(commands, options) {
		let table = commands.split(':')[0];
		let command = commands.split(':')[1];
		let obj = {};
		let modelName = '';

		if (table == 'contacts') modelName = 'Contact';
		if (table == 'addresses') modelName = 'Address';

		switch (command) {
			case "list":
				Control.list(modelName, rows => View.ShowTable(modelName, rows));
				break;

			case "add":
				if (table == 'contacts') obj = { name:options[0], email:options[1], phone:options[2] };
				if (table == 'addresses') obj = { street:options[0], city:options[1], zipCode:options[2] };

				Control.add(modelName, obj, result => View.ShowData(`Data ${modelName} telah ditambahkan dengan id : "${result.id}"`));
				break;

			case "update":
				obj[options[1]] = options[2];

				Control.update(modelName, obj, options[0], result => {
					if (result) View.ShowData(`Data ${modelName} dengan id : ${options[0]} telah diupdate`);
				});
				break;

			case "delete":
				Control.delete(modelName, options[0], result => {
					if (result) View.ShowData(`Data ${modelName} dengan id : ${options[0]} telah dihapus`)
				});
				break;
			default :
				View.ShowHelp();
		}
	}

	static list (modelName, callback) {
		model[modelName].findAll({ raw:true })
		.then(rows => callback(rows));
	}

	static add (modelName, data, callback) {
		model[modelName].create(data, { plain: true })
		.then(result => callback(result));
	}

	static update (modelName, data, id, callback) {
		model[modelName].update(data, { where: { id: id }})
		.then(result => callback(result));
	}

	static delete (modelName, data, callback) {
		model[modelName].destroy({ where: { id: data }})
		.then(result => callback(result));
	}
}

module.exports = Control;