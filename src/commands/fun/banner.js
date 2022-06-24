/**
 * Commande Banner
 * Args : user ou aucun
 * Affiche la bannière de l'utilisateur mentionné, ou celle de l'auteur de la commande
 */

 const { MessageEmbed } = require("discord.js");
 const { MESSAGES } = require("../../utils/commands/commandsProperties");
 
 module.exports.run = async(client, message) => {
     const user = message.mentions.users.first() || message.author;
     
     const bannerEmbed = new MessageEmbed()
         .setTitle("Bannière de " + user.tag)
         .setImage(user.bannerURL({
             dynamic: true,
             format : "png", 
             size: 512
         }))
         .setColor('#32edfb');
     message.channel.send({embeds : [bannerEmbed]});
 }
 
 module.exports.help = MESSAGES.COMMANDS.FUN.BANNER;