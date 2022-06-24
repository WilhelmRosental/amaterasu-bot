const mongoose = require("mongoose");
const { Guild } = require("../../database/models/index");

module.exports = async(client, guild) => {
    const newGuild = {
        guildID: guild.id,
        guildName: guild.name,
        channels: {
            systemChannel: guild.systemChannelID
        }
    };

    await client.createGuild(newGuild);
}