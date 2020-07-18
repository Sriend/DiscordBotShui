const Discord    = require("discord.js");
module.exports = {
    name:"town",
    aliases:"",
    group:"Toram",
    desc:"Show Town List of Toram",
    usage: "<Town Name>",
    run: async (client, message, args)=>{
        let input = args.join(" ");
        if(!input) return message.channel.send();
        let embed = new Discord.MessageEmbed();
        value  = "\nSofya";
        value += "\nEl Scaro";
        value += "\nEinklang";
        value += "\nHora Diorama";
        value += "\nNov Saterica";
        embed.setTitle("Towns List of Toram Online");
        embed.setDescription(value);
        embed.setFooter(`Search By ${message.author.username}`);
        embed.setTimestamp();
        message.channel.send(embed);
    }
}