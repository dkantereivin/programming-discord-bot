require('dotenv').config();
const express = require('express');
const engines = require('consolidate');
const csurf = require("csurf");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const csrfProtection = require('./middleware/csrf-protection');

const app = express();

app.engine('njk', engines.nunjucks);
app.set('view engine', 'njk');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(csurf());
app.use(require('./middleware/add-config'));
app.use(csrfProtection.attach_handler);
require('./routes/authentication')(app);
require('./routes/react-fallback')(app);

const discord_handler = require("./classes/bot");
const bot = new discord_handler(app);

app.use(csrfProtection.error_handler);

app.listen(process.env.PORT || 3000, function () {
    console.log(`App currently running; navigate to localhost:${process.env.PORT || 3000} in a web browser.`);
});