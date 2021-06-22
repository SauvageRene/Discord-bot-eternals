module.exports = {
    name: 'kopphimedia', 
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ed4795')
        .setTitle('Kopphi Media')
        .setDescription('Socials')
        .addFields(
            {name: 'Twitch', value: 'https://www.twitch.tv/kopphi'},
            {name: 'Twitter', value: 'https://twitter.com/kopphi?s=20'}
        )
        .setImage('https://danbooru.donmai.us/data/original/3f/d9/__qiqi_genshin_impact_drawn_by_winterleigh__3fd949c843c12dd6c84944fb84c4a188.png')
        .setFooter('Real Kopphi Kingston');

        message.channel.send(newEmbed)
    }
}