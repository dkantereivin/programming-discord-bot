function setup(app) {
    app.get(['', '/'], (req, res) => {
        console.log(req.csrfToken());
        res.render('pages/index');
    });
}


module.exports = setup;