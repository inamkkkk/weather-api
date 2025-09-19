const express = require('express');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

router.get('/:city', weatherController.getWeather);

module.exports = router;
