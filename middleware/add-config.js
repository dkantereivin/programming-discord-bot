function attach_config(req, res, next) {
    res.locals.appname = process.env.NAME;
    res.locals.environment = process.env.ENVIRONMENT;
    res.locals.client_id = process.env.DISCORD_CLIENT_ID;
    next();
}
module.exports = attach_config;