/**
 * Commande Avatar
 * Args : user ou aucun
 * Affiche l'avatar de l'utilisateur mentionné, ou celui de l'auteur de la commande
 */

const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../utils/commands/commandsProperties");

module.exports.run = async(client, message) => {
    const user = message.mentions.users.first() || message.author;
    
    const avatarEmbed = new MessageEmbed()
        .setTitle("Avatar de " + user.tag)
        .setImage(user.avatarURL({
            dynamic: true,
            format : "png", 
            size: 1024
        }))
        .setColor('#32edfb');
    message.channel.send({embeds : [avatarEmbed]});
}

module.exports.help = MESSAGES.COMMANDS.FUN.AVATAR;