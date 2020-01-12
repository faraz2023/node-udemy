const fs = require("fs");

const bookJSON = {
  title: "Communist Manifesto",
  author: "Karl Marx"
};

const bookString = JSON.stringify(bookJSON);
console.log(bookString);

const bookJSON_new = JSON.parse(bookString);
console.log(bookJSON_new);

//this does not work
//you need to store the string of json in json files
//  fs.writeFileSync("1-json.json", bookJSON);

fs.writeFileSync("1-json.json", bookString);

// read JSON
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);
