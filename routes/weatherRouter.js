const express = require('express');
const router = express.Router();

const getWeather = require('../lib/weather');

router.get('/', (req, res) => {
    res.render('weather');
});

router.get("/:city/:code", async (req, res) => {
    const city = req.params.city;
    const code = req.params.code;
    let data = await getWeather(city, code);
    if (data.cod == "404") {
      res.render("weather", {err: "city doesn't exist"});
      return;
    }
    const name = data.name;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    res.render("weather", {name, data: {description, temp, feelsLike}, listExists: true});
  });

router.post('/', async (req, res) => {
    let city = req.body.city;
    let code = req.body.code;
    let data = await getWeather(city, code);
    if (data.cod == '404') {
        res.render('weather', {
        err: 'The provided location does not exist'
    });
    return;
}
    let name = data.name;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    res.render('weather', {
        name,
        data: {description, temp, feels_like},
        listExists: true
    });
});

module.exports = router;