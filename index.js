const express = require('express');
const engines = require('consolidate');
const config = require('./config');


const app = express();

app.engine('njk', engines.nunjucks);
app.set('view engine', 'njk');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

require("./features/oauth")(app);

app.get('*', (req, res) => {
    res.render('pages/index', {
        appname: config.APPNAME
    });
});

app.listen(config.PORT, function () {
    console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`);
});

