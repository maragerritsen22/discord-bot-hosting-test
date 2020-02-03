const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use this command.");
   let botmessage = args.join(" ");
   message.delete().catch();
   message.channel.send(botmessage)
}

module.exports.help = {
    name: "say"
}