const Discord    = require("discord.js");
module.exports = {
    name:"leveling",
    aliases:"lvl",
    group:"Toram",
    desc:"Show Town List of Toram",
    usage: "<value>",
    run: async (client, message, args)=>{
        let embed = new Discord.MessageEmbed();
        embed.setTitle("Toram Character Leveling Guide!");
        cstr1 = "41~56\n56~65\n65~70\n70~95\n95~105\n105~114\n114~120\n120~130\n130~140\n140~145\n145~150\n150~193";
        cstr2 = "\u200b\nParasite Dog\nMewte\nMasked Warrior\nNightmare potum\nLapin The Necromancer\nCerberus\nSuper Death Mushroom\nCommander Golem\nVenena";
        cstr3 = "Ancient Empress\n\u200b\nGravel Terrace\n\u200b\nGarden of Beginning\nTerrace of Dark River\nSpring of Rebirth\nMonster's Forest\nLufenas Mansion\nUltimea Palace";
        embed.addField("Level",cstr1);
        embed.addField("Monster",cstr2);
        embed.addField("Location",cstr3);
        embed.setFooter(`Search By ${message.author.username}`);
        embed.setTimestamp();
        message.channel.send(embed);
    }
}