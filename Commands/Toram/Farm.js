const Discord    = require("discord.js");
module.exports = {
    name: "farm",
    aliases: ["f"],
    group: "Toram",
    desc: "Show Item Price of Current",
    usage: "name [<name>|<add>|<update>|<delete>]",
    run: async (client, message, args)=>{
        let name = args.join(" ");
        if(!name) return message.channel.send("input farm list!");
        let embed = new Discord.MessageEmbed();
        //let data  = require("");
        embed.setTitle(`${name}`);
        embed.setDescription(`Show of Farm List!`);
        message.channel.send(embed);
    }
}