const { MESSAGES } = require("../../utils/commands/commandsProperties");

module.exports.run = async(client, message, args) => {
    if (!args[0]) {
        return message.errorMessage(`Veuillez me fournir l'ID de la personne à débannir`)
    }
    if (args[0] === message.author.id) {
        return message.errorMessage(`Aha . Vous , n'êtes pas banni puisque je vous parle !`)
    }
    let reason = args.slice("1").join(" ") || "Aucune raison fournie";
    const banList = await message.guild.fetchBan(`${args[0]}`)

    if (!banList) return message.errorMessage(`L'id est invalide ou alors cette personne n'est pas bannie`)

    message.guild.members.unban(args[0], reason).catch(() => {
        console.log(err);
        return message.errorMessage(`Une erreur s'est produite , peut être les permissions`)
    })
    //message.succesMessage(`L'utlisateur **${banList.user.username}** a bien été débanni du serveur . Vous pouvez l'inviter à nouveau !`)
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;