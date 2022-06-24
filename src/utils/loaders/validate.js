module.exports.checkCommandModule = (cmdName, cmdModule) => {
    if(!cmdModule.hasOwnProperty('run'))
        throw new Error(`${cmdName} command n'a pas de propriété 'run' !`);
    if(!cmdModule.help.hasOwnProperty('description'))
        throw new Error(`${cmdName} command n'a pas de propriété 'description' !`);
    if(!cmdModule.help.hasOwnProperty('aliases'))
        throw new Error(`${cmdName} command n'a pas de propriété 'aliases' !`);
    return true;
}

module.exports.checkProperties = (cmdName, cmdModule) => {
    if(typeof cmdModule.run !== 'function')
        throw new Error(`${cmdName} command: n'est pas une fonction !`);
    if(typeof cmdModule.help.description !== 'string')
        throw new Error(`${cmdName} command: description n'est pas une string !`);
    if(!Array.isArray(cmdModule.help.aliases))
        throw new Error(`${cmdName} command: aliases n'est pas un Array !`);
    return true;
}