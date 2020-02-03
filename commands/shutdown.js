const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send('Loading...')
    .then((msg)=> {
      setTimeout(function(){
        msg.edit('Loaded :white_check_mark: ');
      }, 1000)
    }); 


    if(message.author.id != "490944121670729741") return message.channel.send("Your not the bot owner!")
    
    try {
        await message.channel.send("Bot is shutting down...")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
   


}

module.exports.help = {
    name: "shutdown"
}