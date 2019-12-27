function invalidCsrfToken(error, req, res, next) {
    if (error.code !== "EBADCSRFTOKEN") {
        return next(error);
    }
    res.status(403);
    res.send("Expired session - please login and try again. " +
        "If you are blocking cookies " +
        "(or cookies are being deleted on your machine, " +
        "for example with <a href='https://addons.mozilla.org/en-US/firefox/addon/forget_me_not/'>forget me not</a> " +
        "(which you should totally get)) this error may also occur. Browser containerization can also cause this " +
        "error (so turn off <a href='https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/'>your " +
        "multi-account containers addon</a> too). Alternatively it could just be a server restart: try again...");
}
function attachCsrfToken(req, res, next) {
    res.locals.csrfToken = req.csrfToken;
    next();
}
module.exports = {
    error_handler: invalidCsrfToken,
    attach_handler: attachCsrfToken,
};