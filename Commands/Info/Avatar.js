const Discord    = require("discord.js");
module.exports = {
    name: "avatar",
    aliases: "",
    group: "Info",
    desc: "Show your own Avatar",
    usage: "avatar <tagname>",
    run: async (client, message, args)=>{
        let embed = new Discord.MessageEmbed();
        embed.setTitle(message.author.username);
        embed.setImage(message.author.displayAvatarURL());
        message.channel.send(embed);
    }
}