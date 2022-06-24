const { MESSAGES } = require("../../utils/commands/commandsProperties");

module.exports.run = async(client, message, args) => {
    /*
    *
    *
    *
     */
    function clean(text) {
        if (typeof text === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
    }

    if (message.author.id !== "380075021881573386") return;

    console.log(args);

    const code = args.join(" ");
    const evaled = eval(code);
    const cleanCode = await clean(evaled);
    message.channel.send(cleanCode, { code: "js" });
}

module.exports.help = MESSAGES.COMMANDS.ADMIN.EVAL;