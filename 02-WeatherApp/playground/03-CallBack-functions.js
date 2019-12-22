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
      `5ab73615a4eea7184315759bab5452d2/${encodeURIComponent(
        latitude
      )},${encodeURIComponent(longitude)}?units=si`;
    request({ url: wheather_url, json: true }, (error, response) => {
      console.log(
        `${response.body.currently.temperature} and there ` +
          `is ${response.body.currently.precipProbability} chance of` +
          `raining`
      );
    });
  }
};

const get_coordinates = (place_name, callback) => {
  url =
    `https://api.mapbox.com/geocoding/v5/` +
    `mapbox.places/${encodeURIComponent(place_name)}.json?access_token=` +
    `pk.eyJ1IjoiZmFyYXoyMDIzIiwiYSI6ImNrNGRmYzl0bDAyZDEzbXFlZW0waXhuaWYifQ.` +
    `UTuCxMyuR0G_fYYp1yo7lQ&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("request failed", undefined);
    } else if (response.body.features.length === 0) {
      callback("location not found", undefined);
    } else {
      latitude = response.body.features[0].center[1];
      longitude = response.body.features[0].center[0];
      coordinates = [latitude, longitude];
      console.log(`The coordinates of ${place_name} is ${coordinates}`);
      if (callback) {
        callback(undefined, coordinates);
      }
    }
  });
};

const get_weather_by_name = place_name => {
  get_coordinates(place_name, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      get_weather_by_cooridnates(data);
    }
  });
};

yargs.command({
  command: "search",
  describe: "Add a new note",
  // builder is an object that
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
