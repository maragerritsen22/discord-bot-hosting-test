const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {


        var text = new discord.RichEmbed()
        .setColor("#c7f205")
        .setDescription("**Jesse's Bot** \n\n **The prefix from the bot is: > \n ©The bot is in copyright from CatInYellow#1705** \n \n **__Commands__** \n >help - Shows a list of commands. \n >cat - Get's a random cat image. \n >avatar - Gets the users/user avatar! \n >help2 - Shows the second list of commands! \n >botowner - Information about the bot owner. \n >verify - Verify yourself \n >dog - Get's a random dog image. \n >8ball - Ask a question  \n >level - Check your level and XP \n >owner - Pings the owner \n >idea - Makes your idea in a suggestion channel \n >rps - Rock, paper, scissors. Play a game with the bot \n >ticket - Makes a ticket \n >search - Search a YT song for you \n >report - Reports a player in the discord \n >pause - Pauses an song \n >volume - Changes the music/bots volume \n >resume - Continues the song.\n >contact - Sends a DM with all the owner contact information. \n >afk - Sets you to AFK. (IN DEVELOPMENT) \n >skip - Skips a song \n >Hi - Get a message from the bot  \n >info - Sends you your info \n >serverinfo - Tells the info about the server \n >ping - Your ping \n >play - Plays a song \n >leave - Leaves voicechannel. \n\n **__Admins__** \n >warn - warns a player. \n >giveaway - Starts a giveaway \n >unban - Unbans a player! \n >ban - Bans a player \n >unmute - Unmutes a member! \n >mute - Mutes a player. \n >clear - Delete an amount of messages. \n >lockdown - Locksdown a channel. \n >announcement - The bot will make an announcement with your text \n >close - Will close a ticket \n\r *__For more commands do >help2!__* ")
        .setTimestamp();
       // var text = "**Jesse's Bot** \n\n **The prefix from the bot is: ? \n ©The bot is in copyright from CatInYellow#1705** \n \n **__Commands__** \n ?8ball - Ask a question \n ?idea - Makes your idea in a suggestion channel \n ?rps - Rock, paper, scissors. Play a game with the bot \n ?ticket - Makes a ticket \n ?search - Search a YT song for you \n ?report - Reports a player in the discord \n ?pause - Pauses an song \n ?volume - Changes the music/bots volume \n ?resume - Continues the song. \n ?skip - Skips a song \n ?Hi - Get a message from the bot  \n ?info - Sends you your info \n ?serverinfo - Tells the info about the server \n ?ping - Your ping \n ?play - Plays a song \n ?leave - Leaves voicechannel. \n\n **__Admins__** \n ?warn - warns a player. \n ?giveaway - Starts a giveaway \n ?ban - Bans a player \n ?mute - Mutes a player. \n ?clear - Delete an amount of messages. \n ?announcement - The bot will make an announcement with your text \n ?close - Will close a ticket \n ?say - Says a message you want. \n ?unban - Unbans a player. ";
        

        message.author.send(text);

        message.channel.send("A list of commands is send in your DM :mailbox_with_mail:");

    } catch (error) {
    console.log(error);    }

}

module.exports.help = {
    name: "help"
}
