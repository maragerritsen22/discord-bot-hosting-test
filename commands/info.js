const discord = require("discord.js");

module.exports.run = async(bot,message, args) => {

    var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.RichEmbed()
            .setTitle(":tools: | Bot info")
            .setDescription("The bot is created by the one and only CatInYellow#1705")
            .setColor("#31d11f")
            .setThumbnail(botIcon)
            .addField("Bot name", bot.user.username)
            .addField("Made on", bot.user.createdAt);

        return message.channel.send(botEmbed);

}


module.exports.help = {
    name: "info"
}