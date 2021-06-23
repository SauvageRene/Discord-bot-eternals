const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
});
// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); // Making sure out bot is only reading JS files
// Loop through the files to make sure its the correct file 
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);
//     client.commands.set(command.name, command);
// }


// client.once('ready', () => {
//     console.log('Eternals is online!');
// });

// client.on('message', message =>{
//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();


//     if(command === 'ping'){
//         client.commands.get('ping').execute(message,args);

//     } else if(command === 'nyx'){
//         client.commands.get('nyx').execute(message,args);
//     } else if(command === 'tiktok'){
//         client.commands.get('tiktok').execute(message,args);
//     } else if(command === 'rules'){
//         client.commands.get('rules').execute(message, args, Discord);
//     } else if(command === 'kopphimedia'){
//         client.commands.get('kopphimedia').execute(message, args, Discord);
//     } else if (command === 'YACB Media'){
//         client.commands.get('YACB').execute(message, args, Discord);
//     }
// });









client.login('');

// discord bot is working but since token was posted on github, Token had to be regenerated 

