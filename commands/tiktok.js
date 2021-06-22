module.exports = {
    name: 'tiktok',
    description: "Eternal Catalst Tiktok command",
    execute(message, args){
        if(message.member.roles.cache.has('851565130625974304')){
            message.channel.send('https://vm.tiktok.com/ZMeodFqJ8/')
        } else {
            message.channel.send('Permission not granted');
        }
    }
}
// message.member.roles.cache.has(Specify a role(admin, mods, newbies, etc))
