const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    

    message.channel.send(`${message.guild.owner} someone needs you!`)

     message.channel.send(`${message.author} requested your help`)
     message.delete(1000)
    
    

}

module.exports.help = {
    name: "owner"
}