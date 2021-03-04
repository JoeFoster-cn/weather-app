let weather = {
    temperature: 10,
    cloudy: true,
    sunny: false,
    location: "Liverpool",
    wind: 8,
    time: "09:00",
    day: "Wednesday",
    date: "3rd March 2021"
}
const getWeather = () => {
        return weather;
}
console.log(getWeather());

module.exports = getWeather;