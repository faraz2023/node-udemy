const fs = require("fs");
fs.writeFileSync("note.txt", "This by writeSync\n");
fs.appendFileSync("note.txt", "This by appendSync");

///////###//////////

const fm = require("./faraz_module.js");
console.log(fm.name);
console.log(fm.add(10, 20));

//////////////////////////////

const notes = require("./notes.js");

console.log(notes.getNotes());
console.log(notes.setNote());
