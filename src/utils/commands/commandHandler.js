/**
 *
 * Ici on gère la commande si un préfixe est détecté
 *
 */

require('../../utils/messages/messageGenerator');
const { TYPES } = require("../../utils/messages/messageType");

processCommand = async function (client, message, args) {
    const command = client.commands.get(args.shift().toLowerCase()) 
    || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args.shift().toLowerCase()));

    //TODO : DEBUG
    console.log("cmdName : " + command.help.name + " | args : " + args);

    if(!command) return;

    //on vérifie les propriétés de la commande

    //on vérifie si la commande nécessite des arguments
    if(args == '' && command.help.args) {
        return message.error(TYPES.ERROR.MISSING_ARGUMENTS);
        //return message.errorMessage("Cette commande doit s'utiliser avec des arguments !");
    }
    //on vérifie les permissions (fonctionne à priori)
    /*if(command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')){ //TODO : voir avec le commandProperties
        return message.error(TYPES.ERROR.CMD_PERMISSION);
    }*/

    //si la commande est bien trouvée dans la collection de commandes
    if(command) {
        //on éxécute la commande
        command.run(client, message, args);
    }
}