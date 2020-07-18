const Discord    = require("discord.js");
module.exports = {
    name: "farm",
    aliases: ["f"],
    group: "Toram",
    desc: "Show Item Price of Current",
    usage: "name [<name>|<add>|<update>|<delete>]",
    run: async (client, message, args)=>{
        let farm = new Array("metal","cloth","beast","wood","medicine","mana");
        let name = farm.filter(f=>{ return f.includes(args[0]);})[0];
        if(!name) return message.channel.send("input farm list!");
        let embed = new Discord.MessageEmbed();
        let data  = JSON.parse(require("../../Database/Toram/farm.json"));
        console.log(data);
        embed.setTitle(`${name} Materials`);
        switch(name){
            case "metal":
                embed.addField("Item Name","Cracked Halo",true);
                embed.addField("Monster Name","Bubble Angel",true);
                embed.addField("Map Location","Shrine of the Gods Area 2",true);
                break;
            case "cloth":
                break;
            case "beast":
                break;
            case "wood":
                break;
            case "medicine":
                break;
            case "mana":
                break;
            default:
                embed.setDescription("Comming Soon");
                break;
        }
        message.channel.send(embed);
    }
}