const Discord    = require("discord.js");
module.exports = {
    name: "ping",
    aliases: "",
    group: "Info",
    desc: "Return Latency and API Ping",
    usage: "<input>",
    run: async (client, message, args)=>{
        const msg = await message.channel.send(` Pinging...`);
        let embed = new Discord.MessageEmbed();
        embed.setDescription(`\`${msg.createdAt - message.createdAt}ms\``);
        msg.edit(embed);
    }
}