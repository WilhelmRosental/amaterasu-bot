const TYPES = {
    ERROR: {
        MISSING_ARGUMENTS: {
            title: `Arguments Manquants`,
            msg: `Tu as oublié de spécifier un ou plusieurs arguments !`
        },
        INVALID_ARGUMENTS: {
            title: `Arguments Invalides`,
            msg: `Les arguments que tu as renseignés ne sont pas valides !`
        },
        CMD_PERMISSION: {
            title: ``,
            msg: `Tu n'as pas les permissions d'utiliser cette commande !`
        }
    },
    BAN: {
        BAN_YOURSELF: {
            title: `Belle tentative`,
            msg: `Boloss. Tu ne peux pas te bannir toi même 😡`,
            img: ``
        },
        BANMSG_TO_USER: {

        },
        ALREADY_BANNED: {

        },
        BANNED_USER_PM: {

        }
    },
    MUTE: {

    }
}

module.exports.TYPES = TYPES;