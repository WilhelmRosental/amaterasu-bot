const { Message, MessageEmbed } = require("discord.js");
const { TYPES } = require("../../utils/messages/messageType");

//Simple message d'erreur
Message.prototype.error = async function(cmdModules) {
    if(cmdModules) {
        let embed = new MessageEmbed()
            .setTitle(cmdModules.title)
            .setDescription(cmdModules.msg)
            .setColor('#982318');
        return this.channel.send(embed);
    }
};

//Message à l'arrivée ou au départ d'un user
Message.prototype.arrivalMsg = async (user, args, cmdModules) => {

}

//Message à l'arrivé du bot sur le serveur
Message.prototype.botAdded = async (user, args, cmdModules) => {

}

//Message envoyé sur le serveur lors du ban d'un user
Message.prototype.bannedMsg = async (user, args, cmdModules) => {
    let reason;

    if(args.length > 1)
        reason = args.slice(1 , args.length).join(' ');
    else
        reason = "Aucune raison indiquée.";

    let embed = new MessageEmbed()
        .setTitle("Bannissement de " + message.author.tag)
        .setDescription(`L'utilisateur ${message.author} a été banni d'After Life.`)
        .setThumbnail(message.author.avatarURL({size: 512}))
        .addFields(
            { name: 'Raison', value: reason }
        )
        .setColor('#982318')
    return message.channel.send(embed);
}

//Message envoyé par MP à l'utilisateur banni
Message.prototype.bannedPM = (user, args, cmdModules) => {

}