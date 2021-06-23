module.exports = {
    name: 'Eternal Catalyst', 
    description: "Catalyst Socials",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#042475')
        .setTitle('Eternal Catalyst')
        .setDescription('Socials')
        .addFields(
            {name: 'Twitch', value: 'https://www.twitch.tv/yacb'},
            {name: 'Twitter', value: 'https://twitter.com/EternalCatalyst'},
            {name: 'TikTok', value: 'https://www.tiktok.com/@eternalcatalyst?lang=en'}
        )
        .setImage('https://cdnb.artstation.com/p/assets/images/images/027/840/375/large/meri-okkonen-cyberoni-low-res.jpg?1592715813')
        .setFooter("You ain't Catalyst b*tch");

        message.channel.send(newEmbed)
    }
}