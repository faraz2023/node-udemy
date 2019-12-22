const request = require("request");
const yargs = require("yargs");

//const url =
//  "";

//request({ url: url, json: true }, (error, response) => {
//  console.log(response.body);
//});

const get_weather_by_cooridnates = place_coordinates => {
  if (place_coordinates !== []) {
    latitude = place_coordinates[0];
    longitude = place_coordinates[1];
    wheather_url =
      `https://api.darksky.net/forecast/` +
      `5ab73615a4eea7184315759bab5452d2/${latitude},${longitude}?units=si`;
    request({ url: wheather_url, json: true }, (error, response) => {
      console.log(
        `${response.body.currently.temperature} and there ` +
          `is ${response.body.currently.precipProbability} chance of` +
          `raining`
      );
    });
  }
};

const get_weather_by_name = place_name => {
  url =
    `https://api.mapbox.com/geocoding/v5/` +
    `mapbox.places/${place_name}.json?access_token=` +
    `pk.eyJ1IjoiZmFyYXoyMDIzIiwiYSI6ImNrNGRmYzl0bDAyZDEzbXFlZW0waXhuaWYifQ.` +
    `UTuCxMyuR0G_fYYp1yo7lQ&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("request failed");
      return [];
    } else if (response.body.features.length === 0) {
      console.log("location not found");
      return [];
    } else {
      latitude = response.body.features[0].center[1];
      longitude = response.body.features[0].center[0];
      coordinates = [latitude, longitude];
      console.log(`The tempeture in ${place_name} is currently :`);
      get_weather_by_cooridnates(coordinates);
    }
  });
};

yargs.command({
  command: "search",
  describe: "Add a new note",
  // with builder is an object that
  // contains the options of this command
  builder: {
    name: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    get_weather_by_name(argv.name);
  }
});

yargs.parse();
