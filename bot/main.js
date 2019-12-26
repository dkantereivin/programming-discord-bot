const discord = require("discord.js");
const client = new discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

const cat = "659460283600863302";
const name_scheme = "{team}-project-channel";

class Bot {
    constructor(express_server) {
        express_server.post('/create/:team_id', (req, res) => {
            this.create_channel(req.params.team_id, []).then(r => {
                if (!r.success) {
                    console.log(r);
                }
                delete r.full_error;
                res.json(r);
            });
        });
        this.express_server = express_server;
    }
    async create_channel(team, users) {
        let category = client.channels.get(cat);
        if (category.type !== "category") {
            return {success: false, error: "not a category"};
        }
        let position = null;
        category.children.forEach((value) => {
            if (!position || value.position < position) {
                position = value.position;
            }
        });
        try {
            let overwrites = [
                {
                    type: "role",
                    id: category.guild.defaultRole.id,
                    allow: 0,
                    deny: 1024,
                },
            ];
            team.members.forEach(() => {
                    overwrites.push({
                        type: "user",
                        id: "317731855317336067",
                        allow: 515136,
                        deny: 0,
                    })
                }
            );
            let team_channel = await category.guild.createChannel(
                team.toString(),
                {
                    type: "text",
                    parent: category,
                    position: position,
                    permissionOverwrites: overwrites,
                }
                );
            return {success: true, team_channel: team_channel};
        } catch (e) {
            switch (e.name) {
                case "DiscordAPIError":
                    return {success: false, error: "DiscordAPIError", full_error: e};
                default:
                    return {success: false, error: "unknown", full_error: e};
            }
        }
    }
}

client.login('NjM2ODU2OTY4ODc0NTU3NDQy.XgOmVQ.0Qd3MC-wWDPO6w7uniNhYvEkv0k').then();

module.exports = Bot;
