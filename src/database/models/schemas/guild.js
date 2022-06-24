const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../../../utils/config");

const guildSchema = mongoose.Schema({
    guildID: String,
    guildName: String,
    channels: {
        //on récupère le system channel du serveur
        systemChannel: {
            "type" : String,
        }
    }
});

module.exports = mongoose.model("Guild", guildSchema);