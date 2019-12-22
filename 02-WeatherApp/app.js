const request = require("request");
const yargs = require("yargs");
const geocode = require("./utils/geocode.js");
const wheather = require("./utils/wheather.js");

const get_weather_by_name = place_name => {
  geocode.get_geocodes(place_name, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      wheather.get_weather_by_geocodes(data);
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
