const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
});


client.login('');

// discord bot is working but since token was posted on github, Token had to be regenerated 

