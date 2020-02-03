const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "626824780431228958";
    


   var userName = message.author.username;
   var userDiscriminator = message.author.discriminator;

   var bool = false;

   message.guild.channels.forEach((channel) => {

    if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

        message.channel.send("You already have an ticket.");

        bool = true;

    }

   });
       
   if (bool == true) return;

   var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hi, " + message.author.username)
        .setFooter("Succesfully created a Support channel✔️");

        message.channel.send(embedCreateTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => {

          settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), {"READ_MESSAGES":false});

          settedParent.overwritePermissions(message.author, {

            "READ_MESSAGES":true, "SEND_MESSAGES":true,
            "ATTACH_FILES": true, "CONNECT": true,
            "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

          });

          var embedParent = new discord.RichEmbed()
        .setTitle("Hi, " + message.author.username.toString())
        .setDescription("Please set your question/complaints here. An Support Team member will be here soon! If it's over 1 hour you may tag @Support Team");

        settedParent.send(embedParent);
        
        }).catch(err => {
            message.channel.send("Something wrong happend");
        });

    }).catch(err => {
        message.channel.send("Something wrong happend");
    }); 

}

module.exports.help = {
    name: "ticket"
}