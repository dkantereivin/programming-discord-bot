function invalidCsrfToken(error, req, res, next) {
    if (error.code !== "EBADCSRFTOKEN") {
        return next(error);
    }
    res.status(403);
    res.send("Expired session - please login and try again...");
}
function attachCsrfToken(req, res, next) {
    res.locals.csrfToken = req.csrfToken;
    next();
}
module.exports = {
    error_handler: invalidCsrfToken,
    attach_handler: attachCsrfToken,
};