const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();

  // check fo duplicate
  //const duplicates = notes.filter(note => note.title === title);
  const duplicate_note = notes.find(note => note.title === title);

  if (!duplicate_note) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  } else {
    console.log(chalk.redBright(title + " is already saved"));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const notes_to_keep = notes.filter(note => note.title !== title);

  if (notes_to_keep.length !== notes.length) {
    console.log(chalk.redBright.inverse("Note removed"));
    saveNotes(notes_to_keep);
  } else {
    console.log(chalk.greenBright.inverse("Note not found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.bold.blueBright("Your Notes:"));
  notes.forEach(note => {
    console.log("\t" + chalk.red(note.title) + ":  " + note.body);
  });
};

const readNote = title => {
  const notes = loadNotes();

  const the_note = notes.find(note => note.title === title);

  if (!the_note) {
    console.log(chalk.red.bold.italic("no such note"));
  } else {
    console.log(chalk.blueBright.bold(the_note.title) + ":  " + the_note.body);
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports.removeNote = removeNote;
module.exports.addNote = addNote;
module.exports.listNotes = listNotes;
module.exports.readNote = readNote;
