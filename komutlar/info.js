const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const prefix = ("t-")
    const info = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} - v1.1 `, client.user.avatarURL) 
  .setDescription(":calendar_spiral: **Kodlanma Tarihi: **" + "29 Mayıs Cuma" + `\n${client.emojis.get('722185263891349596')} **Yapımcı: **` + "AdoBe#4846" + `\n${client.emojis.get('722184459692146849')} **Discord.js sürümü: ** ` + `v${Discord.version}`+ "\n\n:bust_in_silhouette: **Kullanıcı sayısı **" + `${client.users.size}` + "\n:bar_chart: **Sunucu sayısı **" + `${client.guilds.size}` + `\n${client.emojis.get('722183327150506044')} **RAM Kullanımı : ** ` + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB` +  "\n:military_medal: **Prefix : **" + prefix + "\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬" + "\n[YouTube Kanalı](https://www.youtube.com/channel/UCXb3SKesTo8QZf3ISe9NnlA?view_as=subscriber) | [Web Sitesi](https://teamofryzen.godaddysites.com/) | [do by AdoBe]()")
  .setColor("#df70b7")
  .setTimestamp()

  message.channel.send(info);
  message.react(":white_check_mark:");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info','rebuildtime'],
  permLevel: 0
};
    
exports.help = {
  name: 'info',
  description: 'RyZeN Info Commands',
  usage: 't-info'
};