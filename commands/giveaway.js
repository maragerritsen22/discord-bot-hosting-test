const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't use this command");

    // ?giveaway aantal winnaars, seconden, item(s)
    // Giveaway format: Winnaars seconden item (GEEN KOMMA'S , /!)

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");

    message.delete();

    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 1000));

    var embed = new discord.RichEmbed()
    .setTitle("🎉 **GIVEAWAY** 🎉")
    .setFooter(`Ends at: ${dateTime}`)
    .setDescription(item);

    var embedSend = await message.channel.send(embed);
    embedSend.react("🎉");

    setTimeout(function() {

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.get("🎉").users.array();

        for (let i = 0; i < peopleReacted.length; i++) {
           
           if(peopleReacted[i].id == bot.user.id){
                peopleReacted.splice(i,1);
                continue;
           }    
        } 

        if(peopleReacted.length == 0){
            return message.channel.send("Nobody wins");
        }

        if(peopleReacted.length < winnerCount){
            return message.channel.send("Too few people participated so nobody wins");
        }

        for (let i = 0; i < winnerCount; i++) {
           
            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let y = 0; y < winners.length; y++){

                if(winners[y] == peopleReacted[random]){
                    inList = true;                
                    i--;
                    break;
                }

            }

            if (!inList){
                winners.push(peopleReacted[random]);
            }
        }

        for (let i = 0; i < winners.length; i++) {
           
            message.channel.send("Congrats " + winners[i] + `! You won **${item}**`);

        }

    }, time * 1000);

}

module.exports.help = {
    name: "giveaway"
}