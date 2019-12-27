function setup(app) {
    app.get(['/info', '/info/*'], (req, res) => {
        res.render('pages/index');
    });
}


module.exports = setup;