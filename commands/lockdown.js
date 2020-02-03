const discord = require("discord.js");
const ms = require("ms");



module.exports.run = async (bot, message, args, client) => {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You can't do this");


if(!client.lockit) client.lockit = [];
let time = args.join(" ");
let validUnlocks = ['Release', 'Unlock'];
if (!time) return message.reply("You must set a lockdown time in either hours, minutes or seconds!");

if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
    }).then(() => {
        message.channel.sendMessage("Lockdown lifted.");
        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
    }).catch(error => {
        console.log(error);
    });
}else { 
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    }).then(() => {
        message.channel.sendMessage(`Channel locked  for ${ms(ms(time), { long:true })}`).then(() => {

            client.lockit[message.channel.id] = setTimeout(() => {
                message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: null
                }).then(message.channel.sendMessage('Lockdown lifted.')).catch(console.error);
                delete client.lockit[message.channel.id];
            }, ms(time));

        }).catch(error => {
            console.log(error);
        });
    });
}
message.delete(1000)
    

    


}

module.exports.help = {
    name: "lockdown"
}