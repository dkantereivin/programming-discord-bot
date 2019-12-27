function setup(app) {
    app.get('/api/get/:type?', (req, res) => {
        if (!["user", "team"].includes(req.params.type)) {
            return res.json({
                success: false,
                error: "TypeError",
                human_readable: "Invalid type specified",
                valid_types: ["user", "team"],
                passed_type: req.params.type || "",
                full_error: null
            });
        }
        if (!req.authdata) {
            return res.json({
                success: false,
                error: "AuthError",
                human_readable: "You aren't authenticated, you must pass a header of 'Authorization: Bearer <token>'",
                full_error: null
            });
        }
        let data = req.authdata.team;
        if (req.params.type === "user") {
            data = {id: req.authdata.id, name: req.authdata.name};
        }
        let returnData = {
            success: true,
            type: req.params.type
        };
        returnData[req.params.type] = data;
        res.json(returnData);
    });
}


module.exports = setup;