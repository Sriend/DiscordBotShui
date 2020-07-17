module.exports = {
    name: "roll",
    aliases: "",
    group: "Info",
    desc: "roll a dice with default result 1 to 6",
    usage: "roll [<input>]",
    run: async (client, message, args)=>{
        let input = args[0];
        if(input){
            if(!isNaN(input)){
                num = Math.floor((Math.random() * input) + 1);
                message.channel.send(`You Rolled number ${$num}`);
            }else{
                
                message.channel.send(`Please Input a valid numbed (1-100)`);
            }
        }else{
            num = Math.floor((Math.random() * 5) + 1);
            message.channel.send(`You Rolled number ${$num}`);
        }
    }
}