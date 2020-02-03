const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let request = await message.channel.send("Generating...");
    let taggedUser = message.mentions.users.first() || message.author;

    await message.channel.send({files: [
        {
            attachment: taggedUser.displayAvatarURL,
            name: "avatar.png"
        }


    ]});
    message.delete(1000);
}

module.exports.help = {
    name: "avatar"
}