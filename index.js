const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const indexRouter = require('./routes/indexRouter');
const weatherRouter = require('./routes/weatherRouter');
const errRouter = require('./routes/errRouter');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('*', errRouter);

app.listen(3000, () => {
    console.log("Listening to port 3000");
});

// app.get('/', async (req, res) => {
//     let data = await getWeather(process.env.CITY, process.env.CODE);
//     let name = data.name;
//     let description = data.weather[0].description;
//     let temp = data.main.temp;
//     let feels_like = data.main.feels_like;
//     res.render('index', {
//         name,
//         data:  {description, temp, feels_like}
//     });
// });

// app.get('/weather', (req, res) => {
//     res.render('weather');
// });

// app.post('/weather', async (req, res) => {
//     let city = req.body.city;
//     let code = req.body.code;
//     let data = await getWeather(city, code);
//     if (data.cod == '404') {
//         res.render('weather', {
//         err: 'The provided location does not exist'
//     });
//     return;
// }
//     let name = data.name;
//     let description = data.weather[0].description;
//     let temp = data.main.temp;
//     let feels_like = data.main.feels_like;
//     res.render('weather', {
//         name,
//         data: {description, temp, feels_like},
//         listExists: true
//     });
// });

// app.get('/about', (req, res) => {
//     res.render('about');
// });


// app.get('/', (req, res) => {
//     let data = getWeather();
//     let people = ["joe", "neil"]
//     console.log(data);
//     res.render('index', {data, people});
// });

// app.get('/', (req, res) => {
//     res.render('index');
// });
