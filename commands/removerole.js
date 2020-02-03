const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // ?removerole @mara DJ
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have the permissions to do this!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("Couldn't find that user!");
  let role = args.slice(1).join(" "); 
  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(r=>r.name === role)

  console.log(role)

  if(!gRole) return message.channel.send("Couldn't find that role!");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("They don't  have that role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`You have been removed from the role ${gRole.name}`)
    }catch(e){
        message.channel.send(`RIP to <@${rMember.id}>, they have been removed from the role ${gRole.name}. We tried to DM them, but their DMs are locked`)
    }


}

module.exports.help = {
    name: "removerole"
}