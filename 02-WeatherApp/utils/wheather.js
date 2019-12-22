const request = require("request");

const get_weather_by_geocodes = location => {
  if (location !== []) {
    latitude = location.latitude;
    longitude = location.longitude;
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

module.exports.get_weather_by_geocodes = get_weather_by_geocodes;
