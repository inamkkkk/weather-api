const axios = require('axios');

exports.fetchWeather = async (city) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const baseUrl = process.env.WEATHER_API_BASE_URL;
    const apiUrl = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};
