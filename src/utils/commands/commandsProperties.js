const MESSAGES = {
    COMMANDS: {
        ADMIN: {
            CLEAR: {
                name: 'clear',
                description: 'supprime des messages du salon actuel',
                aliases: [''],
                usage: '<nombre>',
                category: 'admin',
                permissions: ['MANAGE_MESSAGES'],
            },
            EVAL: {
                name: "eval",
                aliases: ['eval'],
                category: 'admin',
                description: "Renvoie un code javascript.",
                cooldown: 3,
                usage: '<code_a_tester>',
                permissions: true,
                args: true,
            }
        },
        FUN: {
            AVATAR: {
                name: "avatar",
                aliases: ['pp'],
                category: 'fun',
                description: "Affiche l'avatar d'un utilisateur.",
                cooldown: 10,
                usage: '<username>',
                roles: [],
                args: false,
            },
            BANNER: {
                name: "banner",
                aliases: ['banner'],
                category: 'fun',
                description: "Affiche la bannière d'un utilisateur.",
                cooldown: 10,
                usage: '<username>',
                roles: [],
                args: false,
            }
        },
        MODERATION: {
            BAN: {
                name: 'ban',
                aliases: ['banmember'],
                category: 'moderation',
                description: 'Banni le membre fourni du serveur.',
                usage: '@user <raison>',
                permissions: ['BAN_MEMBERS'],
                botpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
                args: true,
            },
            UNBAN: {
                name: 'unban',
                aliases: ['unbanmember'],
                category: 'moderation',
                description: 'Débanni le membre fourni du serveur.',
                usage: '@user',
                permissions: ['BAN_MEMBERS'],
                botpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
                args: true,
            },
            MUTE: {
                name: 'mute',
                description: 'Réduit au silence un membre pour un temps donné.',
                aliases: ['']
            },
            UNMUTE: {
                name: 'unmute',
                description: '',
                aliases: ['']
            }
        },
        TESTS: {
            TESTMSG: {
                name: 'testmsg',
                aliases: ['tmsg'],
                category: 'tests',
                description: 'Permet de tester les templates des messages du bot.',
                usage: '<type_to_test>',
                args: ['ban']
            }
        }
    }
}

module.exports.MESSAGES = MESSAGES;