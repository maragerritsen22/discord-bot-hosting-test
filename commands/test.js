const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {


        var text = new discord.RichEmbed()
        .setColor("#c7f205")
        .setDescription("**__Owner information__** \n\r **__DMS__** \n The Dms from the owner are always open! You can send him always an DM for questions! CatInYellow#1705. \n\r  **__Emergency__** \n If it's really emergency you can tag spam him. If he thinks it's not that important you may receive an warn/mute/block, so be sure it is important!")
        .setTimestamp();
       // var text = "**Jesse's Bot** \n\n **The prefix from the bot is: ? \n ©The bot is in copyright from CatInYellow#1705** \n \n **__Commands__** \n ?8ball - Ask a question \n ?idea - Makes your idea in a suggestion channel \n ?rps - Rock, paper, scissors. Play a game with the bot \n ?ticket - Makes a ticket \n ?search - Search a YT song for you \n ?report - Reports a player in the discord \n ?pause - Pauses an song \n ?volume - Changes the music/bots volume \n ?resume - Continues the song. \n ?skip - Skips a song \n ?Hi - Get a message from the bot  \n ?info - Sends you your info \n ?serverinfo - Tells the info about the server \n ?ping - Your ping \n ?play - Plays a song \n ?leave - Leaves voicechannel. \n\n **__Admins__** \n ?warn - warns a player. \n ?giveaway - Starts a giveaway \n ?ban - Bans a player \n ?mute - Mutes a player. \n ?clear - Delete an amount of messages. \n ?announcement - The bot will make an announcement with your text \n ?close - Will close a ticket \n ?say - Says a message you want. \n ?unban - Unbans a player. ";
        

        message.author.send(text);

        message.channel.send("Owner contact information is send in your DM :mailbox_with_mail:");

    } catch (error) {
        message.channel.send("Something wrong happend");
    }

}

module.exports.help = {
    name: "contact"
}