function attach_auth(req, res, next) {
    if (req.headers.authorization && req.headers.authorization !== "Bearer undefined") {
        req.authdata = {
            id: "317731855317336067",
            name: "Minion3665",
            team: {
                name: "The best team",
                id: 123456,
                channel_id: null,
                users: {
                    "299210434467069963": {
                        id: "299210434467069963",
                        name: "Canter#0548",
                        rank: "owner"
                    },
                    "184641676457803777": {
                        id: "184641676457803777",
                        name: "Sam#7128",
                        rank: "user"
                    },
                    "317731855317336067": {
                        id: "317731855317336067",
                        name: "Minion3665#6456",
                        rank: "user"
                    },
                }
            }
        };
    }
    res.locals.authdata = req.authdata;  // TODO: Create proper authentication following ideas discussed in
                                         // https://discordapp.com/channels/@me/659862350043676684/659869621855322192
                                         // as they seem kind ok
    next();
}
module.exports = attach_auth;