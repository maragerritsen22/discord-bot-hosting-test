const discord = require("discord.js");

module.exports.run = async( bot,message, args) => {

    let reason = args.join(' ') ? args.join(' ') : "I am currently AFK, I will reply as soon as possible!";
    let afklist = bot.afk.get(message.author.id);

 if (!afklist) {
     let construct = {
         id: message.author.id,
         reason: reason
     };

     bot.afk = (message.author.id, construct);
     return message.reply(`You have been set to AFK, as reason: ${reason} `);

 } else {
     bot.afk.delete(message.author.id);
     return message.reply(`You have been removed from the AFK list! Welcome back! :D`);

 }



}

module.exports.help = {
    name: "afk"
}