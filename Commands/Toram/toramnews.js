const Discord    = require("discord.js");
module.exports = {
    name: "toramnews",
    aliases: ["p news","p n"],
    group: "Toram",
    desc: "Show Current Active news",
    usage: "<input>",
    run: async (client, message, args)=>{
        let embed = new Discord.MessageEmbed();
        embed.setTitle("5th Anniversary Event");
        embed.setDescription(``);
        message.channel.send(embed);
    }
}