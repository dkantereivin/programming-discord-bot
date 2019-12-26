function attach_config(req, res, next) {
    res.locals.appname = process.env.NAME;
    res.locals.environment = process.env.ENVIRONMENT;
    next();
}
module.exports = attach_config;