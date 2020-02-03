const discord = require("discord.js");
const botCofig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

       // {prefix} speler naam, reden

       var prefix = botCofig.prefix;

       if (!args[0]) return message.channel.send(`Use this command like: ${prefix}report users name and reason`);

       var user = message.guild.member(message.mentions.users.first());

       if (!user) return message.channel.send(`User not found or give user`);

       var reason = args.join(" ").slice(22);

       if (!reason) return message.channel.send(`Give an reason`);

       var reportEmbed = new discord.RichEmbed()
       .setDescription("Reports")
       .setColor("ff0000")
       .addField("Reported user", `${user} with ID ${user.id}`)
       .addField("Reported by", `${message.author} with ID ${message.author.id}`)
       .addField("Reason", reason)
       .setFooter(message.createdAt);

       var reportChannel = message.guild.channels.find("name", "player-reports");
       if (!reportChannel) return message.channel.send(`Channel not found`);

       message.delete();

       return reportChannel.send(reportEmbed);

}

module.exports.help = {
    name: "report"
}