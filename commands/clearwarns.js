const discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permissions to do this!");

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.channel.send("Couldn't find a user.");
    //added code
    if (!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
       if (err) console.log(err);
    });
    //end
    let warnings = warns[wUser.id].warns;

    let warningText = "";
    if (warnings < 0 ) {
    warningText = `${user} warning(s) are cleared!` 
    } else {
    warningText = warnings
    }

    if(!warnings) return message.channel.send("User has no warnings.");



}

module.exports.help = {
    name: "clearwarn"
}