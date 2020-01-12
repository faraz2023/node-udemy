const fs = require("fs");

const challangeJson = fs.readFileSync("1-json.json");
const dataString = challangeJson.toString();
var data = JSON.parse(dataString);
data.title = "capital 1";
console.log(data.title);

finalData = JSON.stringify(data);
fs.writeFileSync("1-json.json", finalData);
