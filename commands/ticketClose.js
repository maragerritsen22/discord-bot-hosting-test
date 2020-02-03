const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "626824780431228958";

    if(message.channel.parentID == categoryId){

        message.channel.delete();

    }else{

        message.channel.send("Use this command in a ticket channel");

    }

    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hi, " + message.channel.name)
        .setDescription("Your ticket is marked as **Done!** Do you want to make a new ticket? Do ?ticket")
        .setFooter("Ticket closed");

        var logChannel = message.guild.channels.find("name", "ticket-logs");
        if(!logChannel) return message.channel.send("Can't find channel");

        logChannel.send(embedCloseTicket);

        

}


module.exports.help = {
    name: "close"
}