const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // ?announcement Title // Bericht // Kleur // kanaal

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You can't do this");

    var splitser = "//";

    if(args[0] == null){

        var useMessage = new discord.RichEmbed()
        .setTitle("Use")
        .setColor("#00ee00")
        .setDescription(`Make an announcement by using: \n >announce Title ${splitser} Message  ${splitser} Color  ${splitser} Channel  ${splitser}`);

        return message.channel.send(useMessage);
    
    }

    args = args.join(" ").split(splitser);

    if (args[2] == undefined) args[2] = "#eeeeee";
    if (args[3] == undefined) args[3] = "announcements";

    var options = {

        titel: args[0] || "Melding",
        bericht: args[1] || "No content specified",
        kleur: args[2].trim(),
        kanaal: args[3].trim()

    }

    var announcer = message.author;

    var announcementEmed = new discord.RichEmbed()
    .setTitle("Announcement")
    .setColor(options.kleur)
    .setDescription(`Message from ${announcer} \n\n ${options.titel} \n\n ${options.bericht} \n`)
    .setTimestamp();

    var announcementChannel = message.guild.channels.find(`name`, options.kanaal);
    if(!announcementChannel) return message.channel.send("Can't find the channel.");

    announcementChannel.send(announcementEmed);

}

module.exports.help = {
    name: "announcement"
}