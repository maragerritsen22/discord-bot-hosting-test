const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete(1000)
    return message.channel.send("You need some help? No problem! Join the support server from me! https://discord.gg/3njG27p");
    
}

module.exports.help = {
    name: "invite"
}