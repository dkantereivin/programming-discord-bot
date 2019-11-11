const unirest = require('unirest');
const setup = (app) => {
    app.get('/auth/callback', (req, res) => {
        authenticateUser(req.query.token, req.query.id, req.query.code, (response, req, res)=> {console.log("success")}, "http://localhost:3000");
    });
};

const authenticateUser = (token, id, code, callback, redirect, req, res) => {
    if (typeof token === 'undefined') {
        token = '';
    }
    if (typeof id === 'undefined') {
        id = '';
    }
    if (typeof code === 'undefined') {
        code = '';
    }
    User.findAll({
        where: {
            github_id: id,
            barter_token: token
        }
    }).then((users) => {
            unirest.post('https://discordapp.com/api/v6/oauth2/token')
                .headers({ 'Accept': 'application/json' })
                .send({
                    "client_id": "636856968874557442",
                    "client_secret": "UX8BiWkcVadlcVby7pw3n4ReAZ5hGtQB",
                    "code": code,
                    "grant_type": "authorization_code",
                    "redirect_uri": ""
                })
                .end((authResponse) => {
                    if (authResponse.body.error) {
                        //We got an error... Not good
                        callback({ status: 'error', type: 'auth_error' }, req, res);
                    } else {
                        //Thank goodness that we could authenticate, from here it is usually fairly plain sailing
                        callback({ status: 'success', body: authResponse.body }, req, res);
                    }
                });
    });
};

module.exports = setup;
