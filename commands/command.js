module.exports = {
    name: 'command', 
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setDescription('an Embed test')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'}
        )
        .addImage()
        setFooter('Make sure to check out the rules channel');
    }
}