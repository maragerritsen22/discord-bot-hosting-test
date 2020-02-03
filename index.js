const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const levelFile = require("./data/levels.json");
const superAgent = require("superagent");
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
const token = process.env.TOKEN;
http.createServer().listen(port);





const fs = require("fs");         
const bot = new discord.Client();

const active = new Map();

bot.commands = new discord.Collection(); 




fs.readdir("./commands/" , (err, files) => { 

    if(err) console.log(err);  

    var jsFiles = files.filter(f => f.split(".").pop() === "js"); 

    if(jsFiles.length <=0) {
        console.log("Could not find any files"); 
        return;
    }

    jsFiles.forEach((f, i) => {   

        var fileGet = require(`./commands/${f}`);  
        console.log(`The file ${f} is loaded`); 

        bot.commands.set(fileGet.help.name, fileGet);
    })

});

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)
    // bot.user.setActivity("?help", { type: "PLAYING" });

    let statuses = [
        ">help",
        ` ${bot.users.size} users`,
        ">invite",
        "The Jay Squad Group",
        "For any suggestions/bugs DM \n CatInYellow#8163"
        
]

    setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 12000) 

    

});

// bot.on("guildMemberAdd", member => {

//     var role = member.guild.roles.find("name", "Non-Member");

//     if(!role) return;

//     member.addRole(role);

//     const channel = member.guild.channels.find("name", "new-people");

//     if (!channel) return;

//     channel.send(`Welcome in the server ${member}`);
// });

bot.on("guildMemberAdd", member => {

    const channel = member.guild.channels.find(`name`, "new-people");
    if (!channel) console.log("Can't find channel");

    var joinMessage = new discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setDescription(`Hi ${member.user.username}, **welcome!**`)
    .setColor("#00FF00")
    .setTimestamp()
    .setFooter("User joined");

    channel.send(joinMessage);

});

bot.on("guildMemberAdd", member => {

    const channel = member.guild.channels.find("name", "logs");
    if (!channel) console.log("Can't find channel");

    var joinMessageLog = new discord.RichEmbed()
    .setTitle("Member Joined")
    .setDescription(`${member} joined the server`)
    .setFooter(`ID: ${member.id}`);

    channel.send(joinMessageLog);
});


bot.on("guildMemberRemove", member => {

    const channel = member.guild.channels.find("name", "new-people");
    if (!channel) console.log("Can't find channel");

    var leaveMessage = new discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setColor("#FF0000")
    .setTimestamp()
    .setFooter("User left");

    channel.send(leaveMessage);

});

bot.on("guildMemberRemove", member => {

    const channel = member.guild.channels.find(`name`, "logs");
    if (!channel) console.log("Can't find channel");

    var leaveMessageLog = new discord.RichEmbed()
    .setTitle("Member Left")
    .setDescription(`${member} left the server`)
    .setFooter(`ID: ${member.id}`);

    channel.send(leaveMessageLog);

});


// var swearWords = ["cancer", "fuck", "shit", "fucking", "bitch", "noob", "nub", "dumb", "stupid", "asshole", "asslicker", "assfucker", "assnigger", "nigger"];

bot.on("message", async message =>  {

    //Als bot bericht stuurt stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);
    (!message.content.startsWith(prefix)); 


    


     var options = {

         active: active

     }




    var randomXp = Math.floor(Math.random(1) * 15) + 1;

    var idUser = message.author.id;

    if (!levelFile[idUser]) {

        levelFile[idUser] = {

            xp: 0,
            level: 0

        }

    }

    levelFile[idUser].xp += randomXp;

    var levelUser = levelFile[idUser].level;
    var xpUser = levelFile[idUser].xp;
    var nextLevelXp = levelUser * 300;

    if (nextLevelXp === 0) nextLevelXp = 100;

    if (xpUser >= nextLevelXp) {

        levelFile[idUser].level += 1;

        fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err => {

            if (err) console.log(err);

        });

        const channel = message.guild.channels.find("name", "levels");
        if(!channel) return;

       channel.send(`<@${message.author.id}> is now Level ${levelFile[idUser].level}`);


    }


    // var msg = message.content.toLowerCase();

    // for (var i = 0; i < swearWords.length; i++){

    //     if (msg.includes(swearWords[i])){

    //         message.delete();

    //         return message.channel.send("Don't swear or face a conversation with the Vice President+!").then(msg => delete(3000));
            
    //     }

    // }

    // var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

    // var msg = message.content.toLowerCase();

    // for (var i = 0; i < swearWords["swearWords"].length; i++){

    //     if (msg.includes(swearWords["swearWords"][i])){

    //         message.delete();

    //         return message.channel.send("Don't swear or face a mute!").then(msg => msg.delete(3000));
            
    //     }

    // }


    if(!commands) {

        var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

        var sentenceUser = "";

        var amountSwearWords = 0;

        for(var y = 0; y < messageArray.length; y++) {

            var changeWord = "";

            for(var i = 0; i < swearWords["swearWords"].length; i++) {

                var word = messageArray[y].toLowerCase();

                if(word == swearWords["swearWords"][i]) {

                    changeWord = word.replace(swearWords["swearWords"][i], "****");

                    sentenceUser = sentenceUser + " " + changeWord;

                    amountSwearWords++;

                }

            }

            if(!changeWord){

                sentenceUser = sentenceUser + " " + messageArray[y];              


            }

        }

        if(amountSwearWords != 0){

            message.delete();
            message.channel.send(sentenceUser);
            message.channel.send(message.author + " Don't swear! It may lead to an mute! Thank you!");

        }

    }

   if (!message.content.startsWith(prefix)) return;

    var commands = bot.commands.get(command.slice(prefix.length));

    
    if (commands) commands.run(bot, message, arguments, options);

       


    
   

   



});

bot.on('error', err => {
    console.log(err);
})


bot.login(process.env.token);