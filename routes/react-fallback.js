function setup(app) {
    app.get(['', '/'], (req, res) => {
        res.render('pages/index');
    });
}


module.exports = setup;