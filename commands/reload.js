const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    message.channel.send('Loading...')
    .then((msg)=> {
      setTimeout(function(){
        msg.edit('Loaded :white_check_mark: ');
      }, 1000)
    }); 


   if(message.author.id != "490944121670729741") return message.channel.send("Your not the bot owner!")

   if(!args[0]) return message.channel.send("Please provide a command to reload!")

   let commandName = args[0].toLowerCase() 

   try {
    delete require.cache[require.resolve(`./${commandName}.js`)] // useage !reload <name>
    bot.commands.delete(commandName)
    const pull = require(`./${commandName}.js`)
    bot.commands.set(commandName, pull)
} catch(e){
    return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``)
   }

   message.channel.send(`The command \`${args[0].toUpperCase()}\` has been reloaded!`)

}



module.exports.help = {
    name: "reload"
}