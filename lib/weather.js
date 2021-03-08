const fetch = require('node-fetch');
require('dotenv').config();

const getWeather = async(city, code, units="metric") => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=${units}&appid=${process.env.APPID}`;
    const data = await fetch(url);
    // console.log(await data.json());
    return await data.json();
}

// getWeather();
module.exports = getWeather;

// let weather = {
//     temperature: 10,
//     cloudy: true,
//     sunny: false,
//     location: "Liverpool",
//     wind: 8,
//     time: "09:00",
//     day: "Wednesday",
//     date: "3rd March 2021"
// }
// const getWeather = () => {
//         return weather;
// }
// console.log(getWeather());

// module.exports = getWeather;


