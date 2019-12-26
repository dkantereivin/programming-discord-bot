const createError = require('http-errors');
const csrf = require('csrf');
const Tokens = new csrf();

function setup(app) {
    app.get('/auth/callback', (req, res, next) => {
        if (!Tokens.verify(req.session.csrfSecret, req.query.state)) {
            throw createError(403, 'invalid csrf token', {
                code: 'EBADCSRFTOKEN'
            });
        }
        req.query.code;
        res.render('pages/index');
    });
}


module.exports = setup;