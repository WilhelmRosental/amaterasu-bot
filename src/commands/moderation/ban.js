/**
 * Commande Ban
 * Args : user
 * Banni l'utilisateur mentionné.
 */

const { MESSAGES } = require("../../utils/commands/commandsProperties");
const { TYPES } = require("../../utils/messages/messageType");

module.exports.run = async(client, message, args) => {
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (user.id === message.author.id) {
        return message.error(TYPES.BAN.BAN_YOURSELF)
    }

    //si l'utilisateur est déjà ban
    const banned = await message.guild.bans.fetch();
    if (banned.some((m) => m.user.id === user.id)) {
        return message.errorMessage(`${user.user.tag} est déja dans la liste des bannisements de ce serveur !`)
    }

    //on récupère la raison du ban dans les arguments
    let reason = args.slice(1).join(" ");
    if (!reason) {
        reason = `Aucune raison donnée parce qu'on a pas le temps 💋`;
    }

    //on vérifie la hiérarchie => on ne peut pas bannir quelqu'un ayant un grade plus élevé
    const member = await message.guild.members.fetch(user.id).catch(() => {});
    if (member) {
        const memberPosition = member.roles.highest.position;
        const moderationPosition = message.member.roles.highest.position;
        if (message.guild.ownerID !== message.author.id && !(moderationPosition > memberPosition)) {
            return message.errorMessage(`Cette personne est plus haute que vous dans la hiérachie !`)
        }
        if (!member.bannable) {
            return message.errorMessage(`Le bot n'est pas assez haut dans la hiérarchie pour bannir cet utilisateur !`)
        }
    }

    //on envoie un mp à l'utilisateur
    //TODO : Message Embed à envoyer en MP
    await user.send(`Bonjour **${user.user.tag}**, Vous avez été banni de **${message.guild.name}** pour la raison **${reason}**.`).catch(() => {});

    //on ban l'utilisateur
    /*TODO : Réactiver => message.guild.members.ban(user, { reason }).then(() => {
        //message de succès si ça a fonctionné
        return message.successBanMessage(`L'utilisateur a été banni du serveur .`, user);
    }).catch((err) => {
        console.log(err);
        return message.errorMessage(`Le bot n'a pas la permission de bannir des membres !`);
    });*/
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;