const discord = require("discord.js");

module.exports.run = async(bot,message, args) => {

    var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.RichEmbed()
            .setDescription("Disord bot owner info")
            .setColor("#31d11f")
            .setThumbnail(botIcon)
            .addField("Bot owner name", "Jesse aka CatInYellow#1705/maragerritsen22")
            .addField("*Jesse made me and is now the founder and owner of me! I do everything that he wants! Do you see any problems/bugs or just some suggestions DM my owner!* :smile:")
            .addField("Bot Made on", bot.user.createdAt);

        return message.channel.send(botEmbed);

}


module.exports.help = {
    name: "botowner"
}