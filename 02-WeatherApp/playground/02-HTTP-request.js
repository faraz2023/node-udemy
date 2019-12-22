const request = require("request");
const fs = require("fs");

const url =
  "https://api.darksky.net/forecast/5ab73615a4eea7184315759bab5452d2/43.6532,-79.3832?units=si";

request({ url: url }, (error, response) => {
  data = JSON.parse(response.body);

  //console.log(data.currently);

  data = JSON.stringify(data);

  fs.writeFileSync("out.json", data);
});

request({ url: url, json: true }, (error, response) => {
  console.log(response.body);
  console.log(
    `The tempeture is currently ` +
      `${response.body.currently.temperature} and there ` +
      `is ${response.body.currently.precipProbability} chance of` +
      `raining`
  );
});
