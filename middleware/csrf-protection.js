function invalidCsrfToken(error, req, res, next) {
    console.log(`Error Caught + ${error}`);
    if (error.code !== "EBADCSRFTOKEN") {
        console.log("ERRORCODE: " + error.code);
        return next(error);
    }
    res.status(403);
    res.send("Expired session - please login and try again. " +
        "If you are blocking cookies " +
        "(or cookies are being deleted on your machine, " +
        "for example with <a href='https://addons.mozilla.org/en-US/firefox/addon/forget_me_not/'>forget me not</a> " +
        "(which you should totally get)) this error may also occur");
}
function attachCsrfToken(req, res, next) {
    res.locals.csrfToken = req.csrfToken;
    next();
}
module.exports = {
    error_handler: invalidCsrfToken,
    attach_handler: attachCsrfToken,
};