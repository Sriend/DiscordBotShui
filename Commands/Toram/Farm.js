const Discord    = require("discord.js");
module.exports = {
    name: "farm",
    aliases: ["f"],
    group: "Toram",
    desc: "Show Item Price of Current",
    usage: "name [<name>|<add>|<update>|<delete>]",
    run: async (client, message, args)=>{
        let farm = new Array("metal","cloth","beast","wood","medicine","mana");
        let name = farm.filter(f=>{ return f === args[0];});
        console.log(name);
        if(!name) return message.channel.send("input farm list!");
        let embed = new Discord.MessageEmbed();
        //let data  = require("");
        embed.setTitle(`${name} Materials`);
        switch(name){
            case "metal":
                embed.addField("Item Name","Cracked Halo",true);
                embed.addField("Monster Name","Bubble Angel",true);
                embed.addField("Map Location","Shrine of Gods",true);
            break;
            case "cloth":
            case "beast":
            case "wood":
            case "medicine":
            case "mana":
            default:
                embed.setDescription("Comming Soon");
                break;
        }
        message.channel.send(embed);
    }
}