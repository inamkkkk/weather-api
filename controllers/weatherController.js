const weatherService = require('../utils/weatherService');

exports.getWeather = async (req, res, next) => {
  try {
    const city = req.params.city;
    const weatherData = await weatherService.fetchWeather(city);
    res.json(weatherData);
  } catch (error) {
    next(error);
  }
};
