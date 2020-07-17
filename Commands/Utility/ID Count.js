const Discord    = require("discord.js");
module.exports = {
    name: "set count",
    aliases: "s count",
    group: "Utility",
    desc: "Set Member Count!",
    usage: "set [<channel>][<guild>|<bot>|<member>|<all>]",
    run: async (client, message, args)=>{
        message.channel.send("Set Channel to Count!");
        message.channel.awaitMessages();
    }
}