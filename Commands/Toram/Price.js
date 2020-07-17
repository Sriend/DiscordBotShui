const Discord    = require("discord.js");
module.exports = {
    name: "price list",
    aliases: ["plist"],
    group: "Toram",
    desc: "Show Item Price of Current",
    usage: "name [<name>|<add>|<update>|<delete>]",
    run: async (client, message, args)=>{
        let name = "";
        let embed = new Discord.MessageEmbed();
        embed.setTitle(`${name}`);
        embed.setDescription(``);
        message.channel.send(embed);
    }
}