const Discord    = require("discord.js");
const { readdirSync } = require('fs');
module.exports = {
    name:"recipe",
    aliases:"",
    group:"Toram",
    desc:"Show Recipe of Toram",
    usage: "[<Item Name>|<Level>]",
    run: async (client, message, args)=>{
        let input = args.join(" ");
        if(!input) return message.channel.send();
        const file = require(`../../Database/Toram/recipe.json`);
        const data = file.filter(f => f["Item Name"].toLowerCase() === `${input}`.toLowerCase())[0];
        if(data){
            let embed = new Discord.MessageEmbed();
            embed.setTitle(`[${data["Item Type"]}]   ${data["Item Name"]}`);
            embed.setDescription(`${data["Recipe Type"]} Recipe`);
            if(data["Item Type"] === "One-Handed Sword"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593643314872341.png?v=1`);}
            if(data["Item Type"] === "Two-Handed Sword"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593435726184459.png?v=1`);}
            if(data["Item Type"] === "Bow"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593515887722506.png?v=1`);}
            if(data["Item Type"] === "Bowgun"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593190078513152.png?v=1`);}
            if(data["Item Type"] === "Staff"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593480110309376.png?v=1`);}
            if(data["Item Type"] === "Magic Device"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593297620598790.png?v=1`);}
            if(data["Item Type"] === "Knuckle"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593349034246152.png?v=1`);}
            if(data["Item Type"] === "Halberd"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593154309488640.png?v=1`);}
            if(data["Item Type"] === "Katana"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593384715190275.png?v=1`);}
            //if(data["Item Type"] === "Armor"){embed.setThumbnail(`https://cdn.discordapp.com/emojis/624593515887722506.png?v=1`);}
            //
            if(data["Lv Item"]){nItem = data["Lv Item"];}else{nItem = 0;}
            if(data["Lv Diff"]){nDiff = data["Lv Diff"];}else{nDiff = 0;}
            if(data["Farm"]  && data["Farm"]  === "Y"){cFarm = "YES";}else{cFarm = "NO";}
            if(data["Event"] && data["Event"] === "Y"){cEvent= "YES";}else{cEvent= "NO";} 
            embed.addField("Lv Item     ",`${nItem}`,true);
            embed.addField("Lv Difficult",`${nDiff}`,true);
            embed.addField("Farm / Event",`${cFarm}/${cEvent}`,true);
            //
            if(data["Mat Name"]){embed.addField("Material",`${data["Mat Name"]}`,true);}
            if(data["Qty"])     {embed.addField("Quantity",`${data["Qty"]}`     ,true);}
            if(data["Mon Name"]){embed.addField("Monster ",`${data["Mon Name"]}`,true);}
            //
            embed.setFooter(`Search By ${message.author.username}`);
            embed.setTimestamp();
            //
            message.channel.send(embed);
        }
        //console.log(data);
    }
}