const Discord    = require("discord.js");
module.exports = {
    name: "git",
    aliases: "g",
    group: "Utility",
    desc: "Update Bot activities.",
    usage: "<input>",
    run: async (client, message, args)=>{
        if(message.author.id !== "195983734644801536") return;
        //const msg = await message.channel.send(` Pinging...`);
        //let embed = new Discord.MessageEmbed();
        //embed.setDescription(`\`${msg.createdAt - message.createdAt}ms\``);
        //msg.edit(embed);
    }
}