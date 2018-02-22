// const Controller
const chalk = require('chalk');
const CliTable = require('cli-table');

class View {
  constructor() {

  }

  static tableDatas(objects){
    let tableHeads;
    if (objects.length === undefined) {
      tableHeads = Object.getOwnPropertyNames(objects.dataValues);
    } else {
      tableHeads = Object.getOwnPropertyNames(objects[0].dataValues);
    }

    tableHeads.pop();
    tableHeads.pop();
    let cols = [];
    for (let i = 0; i < tableHeads.length; i++) {
      if (i === 0) {
        cols.push(5);
      } else {
        cols.push(40);
      }
    }

    let cliTable = new CliTable({
        head: tableHeads,
        colWidths: cols
    });

    if (objects.length === undefined) {
      let tableContents = [];
      for (let j = 0; j < tableHeads.length; j++) {
        tableContents.push(chalk.yellow( objects[tableHeads[j]] ));
        // console.log(tableContents);
      }
      cliTable.push(tableContents);
    } else {
      for (let i = 0; i < objects.length; i++) {
        let tableContents = [];
        for (let j = 0; j < tableHeads.length; j++) {
          tableContents.push(chalk.yellow( objects[i][tableHeads[j]] ));
          // console.log(tableContents);
        }
        cliTable.push(tableContents);
      }
    }
    return cliTable;
  }

  // ##############################

  static displayAddData(newdata){
    console.log(chalk.blue.bgWhite.bold(`Displaying created row.`));
    console.log(View.tableDatas(newdata).toString());
    process.exit();
  }

  static displayOneFound(foundData){
    console.log(chalk.blue.bgWhite.bold('Displaying found row.'));
    console.log(View.tableDatas(foundData).toString());
    process.exit();
  }

  static displayManyFound(foundDatas){
    console.log(chalk.blue.bgWhite.bold('Displaying all rows.'));
    console.log(View.tableDatas(foundDatas).toString());
    process.exit();
  }

  static displayUpdate(updatedData){
    console.log(chalk.blue.bgWhite.bold(`Displaying updated row.`));
    console.log(View.tableDatas(updatedData).toString());
    process.exit();
  }

  static displayDestroyed(deletedData){
    console.log(chalk.blue.bgWhite.bold(`Displaying deleted row.`));
    console.log(View.tableDatas(deletedData).toString());
    process.exit();
  }

}


module.exports = View
