function setup(app) {
    require('./api/get')(app);
    app.get('/api/*', (req, res) => {
        return res.json({
            success: false,
            error: "NotFound",
            human_readable: "404 - that doesn't appear to be a valid API URI",
            full_error: 404
        });
    });
}


module.exports = setup;