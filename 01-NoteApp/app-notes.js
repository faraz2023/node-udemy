const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");
const fs = require("fs");

//argument vector
/*
    console.log(process.argv);
    const command = process.argv[2];

    if (command === "add") {
    console.log("Adding: " + process.argv[3]);
    }
*/

//argument parsing
//console.log(process.argv);
//console.log(yargs.argv);

yargs.version("1.1.0"); //run node app-notes.js --version

//add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  // with builder is an object that
  // contains the options of this command
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "the title of the note to be removed",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//list command
yargs.command({
  command: "list",
  describe: "List the notes",
  handler() {
    notes.listNotes();
  }
});

//Read command
yargs.command({
  command: "read",
  describe: "read the notes",
  builder: {
    title: {
      describe: "the title of desired note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
