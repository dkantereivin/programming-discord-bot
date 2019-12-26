function attach_auth(req, res, next) {
    req.authdata = {
        id: "317731855317336067",
        name: "Minion3665",
        team: {
            name: "The best team",
            id: 123456,
            channel_id: null,
            users: {
                "299210434467069963": "owner",
                "184641676457803777": "user",
                "317731855317336067": "user",
            }
        }
    };
    res.locals.authdata = req.authdata;  // TODO: Create proper authentication following ideas discussed in https://discordapp.com/channels/@me/659862350043676684/659869621855322192 as they seem kind ok
    next();
}
module.exports = attach_auth;