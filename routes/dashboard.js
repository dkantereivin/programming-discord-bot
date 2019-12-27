function setup(app) {
    app.get(['/dashboard', '/dashboard/*'], (req, res) => {
        res.render('pages/index');
    });
}


module.exports = setup;