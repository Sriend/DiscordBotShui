module.exports = {
    name: "clear",
    aliases: "",
    group: "Utility",
    desc: "Clear Chat Messages on a channel",
    usage: "<input>",
    run: async (client, message, args)=>{
        const num = args.join(" ");
        if(!num) return message.reply('please provide an ammount between 1 to 100 to delete');
        await message.channel.messages.fetch({limit: num}).then(msg=>{
            message.channel.bulkDelete(msg);
        });
        message.delete();
    }
}