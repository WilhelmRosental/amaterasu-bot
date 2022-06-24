const c = require('ansi-colors');
const fs = require('fs').promises;
const path = require('path');
const { checkCommandModule, checkProperties } = require('./validate');
const commandStatus = [
    [`${c.bold('Commandes')}`, `${c.bold('Statut')}`, `${c.bold('Déscription')}`]
], eventStatus = [
    [`${c.bold('Events')}`, `${c.bold('Statut')}`, `${c.bold('Déscription')}`]
];

async function registerCommands(client, dir) {
    let files = await fs.readdir(path.join(__dirname, dir));
    //On parcours tout les files/directories (et pas toutes les filles mdrr)
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        //Si c'est un directory, appel récurssif
        if(stat.isDirectory())
            registerCommands(client, path.join(dir, file));
        else {
            //on vérifie qu'il est bien en .js (on sait jamais)
            if(file.endsWith(".js")) {
                let cmdModule = require(path.join(__dirname, dir, file));

                try {
                    if(checkCommandModule(cmdModule.help.name, cmdModule)) {
                        if(checkProperties(cmdModule.help.name, cmdModule)) {
                            let aliases = cmdModule.help.aliases;
                            client.commands.set(cmdModule.help.name, cmdModule);
                            if(aliases.length !== 0)
                                aliases.forEach(alias => client.commands.set(alias, cmdModule));
                            commandStatus.push(
                                [`${c.cyan(`${cmdModule.help.name}`)}`, `${c.bgGreenBright('Succès')}`, `${cmdModule.help.description}`]
                            )
                        }
                    }
                }
                catch(err) {
                    console.log(err);
                    commandStatus.push(
                        [`${c.white(`${cmdModule.help.name}`)}`, `${c.bgRedBright('Échec')}`, '']
                    );
                }
            }
        }
    }
}

async function registerEvents(client, dir) {
    let files = await fs.readdir(path.join(__dirname, dir));
    //On parcours tout les files/directories
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory())
            registerEvents(client, path.join(dir, file));
        else {
            //on vérifie qu'il est bien en .js (on sait jamais)
            if(file.endsWith(".js")) {
                let eventName = file.substring(0, file.indexOf(".js"));

                try {
                    let eventModule = require(path.join(__dirname, dir, file));
                    client.on(eventName, eventModule.bind(null, client));
                    eventStatus.push(
                        [`${c.cyan(`${eventName}`)}`, `${c.bgGreenBright('Succès')}`, `${eventModule.description}`]
                    )
                }
                catch(err) {
                    console.log(err);
                    eventStatus.push(
                        [`${c.white(`${eventName}`)}`, `${c.bgRedBright('Échec')}`, '']
                    );
                }
            }
        }
    }
}

module.exports = {
    commandStatus, 
    eventStatus, 
    registerEvents, 
    registerCommands 
};