const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var idea = args.join(' ');
    if (!idea) return message.channel.send("No idea given. Give an idea");

    var ideaEmbed = new discord.RichEmbed()
    .setTitle("New Idea")
    .setColor("#00FF00")
    .addField("Idea", idea)
    .addField("Send by", message.author);

    message.channel.send("Idea succesfully sent ✔️")

    var ideaChannel = message.guild.channels.find(`name`, "❓suggestions❔");
    if (!ideaChannel) return message.channel.send("Channel not found");

    ideaChannel.send(ideaEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });

}


module.exports.help = {
    name: "idea"
}