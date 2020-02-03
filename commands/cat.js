const discord = require("discord.js");
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {

    message.channel.send('Loading...')
.then((msg)=> {
  setTimeout(function(){
    msg.edit('Loaded :white_check_mark: ');
  }, 1000)
}); 

    var cat;

    cat = await superAgent
    .get("https://aws.random.cat/meow");

    
    while(cat.body.file.endsWith(".mp4") || cat.body.file.endsWith(".webm")){
        cat = await superAgent
          .get("https://aws.random.cat/meow");
    }


    var embed = new discord.RichEmbed()
    .setTitle("cat :cat:")
    .setColor("#880000")
    .setImage(cat.body.file);

    message.channel.send(embed);

}



module.exports.help = {
    name: "cat" 
}