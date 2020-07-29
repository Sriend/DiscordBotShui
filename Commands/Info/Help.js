const Discord    = require("discord.js");
module.exports = {
    name: "help",
    aliases: "h",
    group: "Info",
    desc: "Show Information of Commands",
    usage: "<input>",
    run: async (bot, message, args)=>{
        let embed = new Discord.MessageEmbed();
        let value = args.join(" ");
        if(value){
            embed.setTitle("Shuinya Help Command List!");
            embed.setDescription(`${value}`);
            //embed.addField();
            // Send Command
            message.channel.send(embed);
        }else{
            embed.setTitle("Shuinya Help Command List!");
            embed.setDescription("Type ``Help [Command|Group]`` for Detailed Information!");
            // Game Command
            cmdlist = bot.groups.filter(f => f.includes("Game"));
            cstr = ""; cmdlist.forEach(cmd =>{cstr += `\`\`${cmd[1]}\`\` `;});
            if(cstr !== ""){embed.addField("Game Command",cstr);}
            // Info Command
            cmdlist = bot.groups.filter(f => f.includes("Info"));
            cstr = ""; cmdlist.forEach(cmd =>{cstr += `\`\`${cmd[1]}\`\` `;});
            if(cstr !== ""){embed.addField("Info Command",cstr);}
            // RPG Command
            cmdlist = bot.groups.filter(f => f.includes("RPG"));
            cstr = ""; cmdlist.forEach(cmd =>{cstr += `\`\`${cmd[1]}\`\` `;});
            if(cstr !== ""){embed.addField("RPG Command",cstr);}
            // Toram Command
            cmdlist = bot.groups.filter(f => f.includes("Toram"));
            cstr = ""; cmdlist.forEach(cmd =>{cstr += `\`\`${cmd[1]}\`\` `;});
            if(cstr !== ""){embed.addField("Toram Command",cstr);}
            // Shui Command
            cmdlist = bot.groups.filter(f => f.includes("Shui"));
            cstr = ""; cmdlist.forEach(cmd =>{cstr += `\`\`${cmd[1]}\`\` `;});
            if(cstr !== ""){embed.addField("Shui Command",cstr);}
            // Utility Command
            cmdlist = bot.groups.filter(f => f.includes("Util"));
            cstr = ""; cmdlist.forEach(cmd =>{cstr += `\`\`${cmd[1]}\`\` `;});
            if(cstr !== ""){embed.addField("Utility Command",cstr);}
            // Send Command
            message.channel.send(embed);
        }
    }
}