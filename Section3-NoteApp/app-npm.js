const validator = require("validator");
const notes = require("./notes.js");

console.log(validator.isEmail("Faraz@gmail.com"));
console.log(validator.isEmail("Farazgmail.com"));

////
const chalk = require("chalk");
console.log(chalk.blue.bold.bgWhite("Success with chalk! and Nodemon!"));
