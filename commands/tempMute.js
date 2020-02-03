const discord = require("discord.js");

module.exports.run = async(bot,message, args) => {
// check if the command caller has perms
if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You don't have the permissions to do this!")

if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I don't have the permissions to do this!")

//define the reason and mutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
if(!mutee) return message.channel.send("Please add a user to be muted!")

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given!"


//define mute role and if the mute rule excist
let muteRole = message.guild.roles.find(r => r.name == "Muted")
if(!muteRole) {
    try {
        muteRole = await message.guild.createRole({
            name: "Muted",
            color: "#514F48",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false
            })
        })

    } catch(e) {
        console.log(e.stack);
    }
} 


// add role to the user

mutee.addRole(muteRole.id).then(() => {
    message.delete()
    mutee.send(`You have been muted in: **${message.guild.name}** for: **${reason}** `)
    message.channel.send(`${mutee.user} was succesfully muted.`)
})


//send an embed

let embed = new discord.RichEmbed()
.setColor("#a83232")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "Mute")
.addField("Muted person:", mutee.user)
.addField("Moderator:", message.author)
.addField("Reason:", reason)
.addField("Date:", message.createdAt)

let sChannel = message.guild.channels.find(c => c.name === "logs")
sChannel.send(embed)

};




module.exports.help = {
    name: "mute"
}