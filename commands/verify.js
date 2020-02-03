const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var user = message.author.username;

    //user msg

    var usermsg = new discord.RichEmbed()
        .setTitle("Verify")
        .setColor("#fc03a1")
        .setThumbnail("https://www.google.com/imgres?imgurl=https%3A%2F%2Fdhrm.utah.gov%2Fwp-content%2Fuploads%2FVOE-Image-1.jpg&imgrefurl=https%3A%2F%2Fdhrm.utah.gov%2Femployment%2Fverification-of-employment&docid=hoXDhn-ZRoF9GM&tbnid=WsTvJEI4f3uJoM%3A&vet=10ahUKEwiX1omYmY3lAhXFbVAKHSeNCwcQMwhWKA4wDg..i&w=1000&h=750&bih=913&biw=1280&q=verify&ved=0ahUKEwiX1omYmY3lAhXFbVAKHSeNCwcQMwhWKA4wDg&iact=mrc&uact=8")
        .setTimestamp()
        .setDescription(`You got verified in ${message.guild.name} :smiley: `);

        //msg to the member
        message.member.send(usermsg)

        //msg in the channel
        message.channel.send(`Hi ${user} you got verified! Enjoy your time here!`)

        message.member.addRole('617766786183462923')
        message.member.addRole('515734871482695700')
        message.member.addRole('632339095087218699')

        var logChannel = message.guild.channels.find(`name`, "logs");
        if (!logChannel) message.guild.send("Didn't find the channel!")

        var logEmbed = new discord.RichEmbed()
        .setTitle("User verified")
        .setDescription(`${user} got verified! ✔️`)
        .setColor("#42f566");


        logChannel.send(logEmbed);
        message.delete(1000)

}

module.exports.help = {
    name: "verify"
}