const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';


client.once('ready', () => {
    console.log('Eternals is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
});







client.login('');

// discord bot is working but since token was posted on github, Token had to be regenerated 

