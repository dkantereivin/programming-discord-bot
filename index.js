const express = require('express');
const engines = require('consolidate');
const config = require('./config');
const csurf = require("csurf");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const csrfProtection = require('./middleware/csrf-protection');

const app = express();

app.engine('njk', engines.nunjucks);
app.set('view engine', 'njk');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
    secret: "CoPD is the best also I like lasagna and hopefully this is a random enough secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(csurf());
app.use(csrfProtection.error_handler);
app.use(csrfProtection.attach_handler);

const discord_handler = require("./bot/main");
const bot = new discord_handler(app);

app.get('*', (req, res) => {
    res.render('pages/index', {
        appname: config.APPNAME
    });
});

app.listen(config.PORT, function () {
    console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`);
});

process.on('uncaughtException', (error) => {
});