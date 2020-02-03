
module.exports.run = async(bot,message, args) => {

    message.channel.send("Ping: " + (Date.now() - message.createdTimestamp) + "ms");

}

module.exports.help = {
    name: "ping"
}