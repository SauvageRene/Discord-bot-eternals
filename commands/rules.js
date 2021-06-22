module.exports = {
    name: 'command', 
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setDescription('an Embed test')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'No spam'}
        )
        .setImage('https://www.akcpetinsurance.com/res/akc/images/icons/home/home_dog.png')
        .setFooter('Make sure to check out the channel rules');

        message.channel.send(newEmbed)
    }
}