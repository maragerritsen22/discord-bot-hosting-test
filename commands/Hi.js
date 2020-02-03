const discord = require("discord.js");

module.exports.run = async(bot,message, args) => {

message.channel.send("Hi, glad you called me! :)");

}


module.exports.help = {
    name: "Hi"
}