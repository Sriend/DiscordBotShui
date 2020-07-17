const Discord    = require("discord.js");
const bot        = new Discord.Client({disableEveryone: true});
//const Auth       = require(__dirname+"/Auth.json");
const ascii      = require("ascii-table");
//const command    = require(__dirname+"/Commands");
bot.commands     = new Discord.Collection();
bot.tables       = new ascii().setHeading("Command","Group","Filename","Status");
bot.groups       = new Array();
bot.aliases      = new Discord.Collection();
bot.stats        = {serverID: "", total: "", member: "", bot: ""};
["command.js"].forEach(handler =>{require(`./Handler/${handler}`)(bot);});
const Token = process.env.BOT_TOKEN;
//const Token = Auth.token;
bot.login(Token);
// Ready
bot.on('ready',()=>{
    console.log("Shui is Online");
    let size = bot.guild.size();
    bot.user.setActivity(`Developing... ${size} Guilds!`,{type:"PLAYING"});
});
// Guild Member Add
bot.on('guildMemberAdd', member =>{
    if(member.guild.id != stats.serverID) return;
    bot.channels.cache.get(stats.total).setName(`Total User: ${member.guild.memberCount}`);
    bot.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    bot.channels.cache.get(stats.bot).setName(`Members: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
});
bot.on('guildMemberRemove', member =>{
    if(member.guild.id != stats.serverID) return;
    bot.channels.cache.get(stats.total).setName(`Total User: ${member.guild.memberCount}`);
    bot.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    bot.channels.cache.get(stats.bot).setName(`Members: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
});
// Message Input
bot.on('message', async message =>{
    const prefix = ".";
    //
    if(!message.content.startsWith(prefix)) return;
    if( message.author.bot) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    //if(!message.author.id !== Auth.ownerID) return;
    //
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmds = args.shift().toLowerCase();
    if(cmds === "potum" || cmds === "shui")    cmds = cmds + " " + args.shift();
    //
    if(cmds.length === 0) return;
    let command = bot.commands.get(cmds);
    if(!command) command = bot.commands.get(bot.aliases.get(cmds));
    if( command) command.run(bot, message, args);
    //console.log(cmd);
});
