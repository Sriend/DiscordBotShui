const { readdirSync } = require('fs');
module.exports = (bot)=>{
    readdirSync("./Commands/").forEach(dir=>{
        const commands = readdirSync(`./Commands/${dir}/`).filter(f=> f.endsWith(".js"));
        for(let file of commands){
            let pull = require(`../Commands/${dir}/${file}`);
            let skip = require(`./ignore.json`);

            if(pull.name && skip.name.indexOf(pull.name) <= -1){
                bot.commands.set(pull.name,pull);
                bot.tables.addRow(pull.name,pull.group,file,true);
                bot.groups.push([pull.group,pull.name,true]);
            }else{
                bot.commands.set(pull.name,pull);
                bot.tables.addRow(pull.name,pull.group,file,false);
                bot.groups.push([pull.group,pull.name,false]);
                continue;
            }
            if(pull.aliases && Array.isArray(pull)){
                pull.aliases.forEach(alias => bot.aliases.set(alias,pull.name));
            }
        }
    });
    console.log(bot.tables.toString());
}