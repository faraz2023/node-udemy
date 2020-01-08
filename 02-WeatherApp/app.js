const yargs = require("yargs");
const chalk = require("chalk");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const get_weather_by_name = place_name => {
  geocode.get_geocodes(place_name, (error, data) => {
    if (error) return console.log(error);

    //turning the first character to upper
    place_name = place_name.replace(/^\w/, c => c.toUpperCase());

    const { latitude, longitude } = data;
    console.log(
      `The coordinates of ` +
        `${chalk.redBright(place_name)}:\n` +
        `\t${chalk.greenBright(latitude)}` +
        ` and ${chalk.greenBright(longitude)}`
    );

    forecast.get_weather_by_geocodes(data, (error, data) => {
      if (error) return console.log(error);
      console.log(
        `The current tempeture is ` +
          `${chalk.bold.cyanBright(data.current_tempeture)} and there ` +
          `is ${chalk.cyanBright(data.rain_chance)} chance of` +
          ` raining`
      );
    });
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
