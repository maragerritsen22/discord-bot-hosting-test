const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // ?warn user reason

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't use this command");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Give an user or the user may not be in this server");

    //if (user.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You can't warn this person");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Give an reason"); 
 
    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
       if (err) console.log(err);
    });





    var warnEmbed = new discord.RichEmbed()
        .setDescription("Warning")
        .setColor("#ee0000")
        .addField("Warned user", user)
        .addField("Warnings", warns[user.id].warns)
        .addField("Warned by", message.author)
        .addField("Reason", reason);

    var warnChannel = message.guild.channels.find(`name`, "logs");
    if (!warnChannel) return message.guild.send("Can't find the channel");

    warnChannel.send(warnEmbed);
    
    




}

module.exports.help = {
    name: "warn"
}