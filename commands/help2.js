const discord = require("discord.js");

module.exports.run = async(bot,message, args) => {

try {

    var text = new discord.RichEmbed()
    .setColor("#c7f205")
    .setDescription("**Help list 2!** \n\r >say - Says a message you want. \n >unban - Unbans a player. \n >addrole - Adds the role you said to someone. \n >removerole - Removes the role you said to someone. \n >embed - Creates a custom embed message, with the amazing message! \n >invite - Shows the support server invite link! \n >warnings - Check the amount of warnings from a user. \n >endshift - Makes a message that the shift has ended. \n\r **__Owner__** \n >reload - Reloads a command \n \n >shutdown - Shutdowns the bot. \n\r *__For the previous commands do >help!__* \n\r **For any bugs/suggestions dm CatInYellow!**")
    .setTimestamp();
  
    
   message.author.send(text);

   message.channel.send("A list of commands is send in your DM :mailbox_with_mail:");

} catch (error) {
console.log(error);    }




}


module.exports.help = {
    name: "help2"
}