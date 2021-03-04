const express = require('express');
const hbs = require('express-handlebars');
const getWeather = require('./lib/weather');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    let data = getWeather();
    let people = ["joe", "neil"]
    console.log(data);
    res.render('index', {data, people});
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    let name = req.query.name
    let age = req.query.age
    res.render('about', {name, age});
});

// app.get('/about', (req, res) => {
//     res.render('about');
// });

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});