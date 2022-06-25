require('../../utils/commands/commandHandler');
const PREFIX = process.env.PREFIX;

module.exports = async(client, message) => {
    //si l'auteur du message est un bot
    if(message.author.bot) return;

    //si on détecte le préfix => commande
    if(message.content.startsWith(PREFIX)) {
        console.log("Oui");
        return processCommand(client,message, message.content.slice(PREFIX.length).split(/ +/));
    }
};