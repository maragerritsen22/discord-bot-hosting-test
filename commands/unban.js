const discord = require("discord.js");
// Use j?unban (USER ID)
module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermissions("BAN_MEMBERS", "ADMINISTRATOR")) return message.channel.send("You don't have the permissions to do this!") 
   
    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Provide a user ID to unban someone!")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermissions("BAN_MEMBERS", "ADMINISTRATOR")) return message.channel.send("I don't have permission to do this!")
    message.delete(1000)
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} has been unbanned from the server!`)
    }catch(e) {
        console.log(e.message)
    }

    var embed = new discord.RichEmbed()
    .setTitle("Unban")
    .setDescription("User unbanned!")
    .setColor("#b81b16")
    .addField("Unbanned user", bannedMember)
    .addField("Unbanned by", message.author)
    .addField("Reason", reason);

    var unbanChannel = message.guild.channels.find(`name`, "logs");
    if (!unbanChannel) return message.guild.send("Can not find channel");


     unbanChannel.send(embed);

       
       

}

module.exports.help = {
    name: "unban"
}