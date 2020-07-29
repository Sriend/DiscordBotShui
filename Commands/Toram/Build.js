const Discord    = require("discord.js");
module.exports = {
    name:"build",
    aliases:"",
    group:"Toram",
    desc:"Show Skill Build",
    usage: "<Weapon Type><Num>",
    run: async (client, message, args)=>{
        let embed = new Discord.MessageEmbed();
        let equip = args[0];
        if(!equip) return message.channel.send("Please Input Weapon Type!");
        let num   = args[1];
        if(!num)   return message.channel.send("Please Input Build Number!");
        //  Title Build
        embed.setTitle("Character Skill Build List!");
        embed.setDescription("Show Character Skill Build.");
        //  Equipment Build
        //embed.addField("Equip Type","\u200b",true);
        //embed.addField("Equip Name","\u200b",true);
        //embed.addField("Equip xtal","\u200b",true);
        //  Skill Build
        let skill = "";
        let skill1 = "\u200b";
        let skill2 = "\u200b";
        let skill3 = "\u200b";
        fs         = require("fs");
        let file = fs.readFileSync(`../../Database/Toram/build.txt`);
        console.log(file);
            /*skill = contents.split("\n");
            skill.forEach(skill => {
                let result = skill.split(", ");
                console.log(result);
                skill1 += " "+result[0].toString();
                skill2 += " "+result[1].toString();
                skill3 += " "+result[2].toString();
            });*/
        embed.addField("Skill Type ",`${skill1}`,true);
        embed.addField("Skill Name ",`${skill2}`,true);
        embed.addField("Information",`${skill3}`,true);
        //  Footer Build
        embed.setFooter(`Search By ${message.author.username}`);
        embed.setTimestamp();
        message.channel.send(embed);
    }
}