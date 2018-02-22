const Table = require('cli-table');
const colors = require('colors');

class View {
	static ShowData(data) {
		console.log(data);
	}

	static ShowTable(command, rows) {
		let header = View.GetHeader(command, 'green');

		let table = new Table({ head: header });

		rows.forEach((row) => {
			table.push(View.GetRow(command, row));
		});

		console.log(table.toString());
	}

	static ShowHelp() {
		console.log(`Command Salah`);
	}

	static GetHeader(command, color) {
		let header = [];
		switch (command) {
			case "Contact" : header = ['ID'[color], 'Name'[color], 'Email'[color], 'Phone'[color]]; break;
			case "Address" : header = ['ID'[color], 'Street'[color], 'City'[color], 'Zip Code'[color]]; break;
		}
		return header;
	}

	static GetRow(command, rowData) {
		let row = [];
		switch (command) {
			case "Contact" : row = [rowData.id, rowData.name, rowData.email, rowData.phone]; break;
			case "Address" : row = [rowData.id, rowData.street, rowData.city, rowData.zipCode]; break;
		}
		return row;
	}
}

module.exports = View;