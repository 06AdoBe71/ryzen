const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const epicgames = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("Epic Games Store")
      .setDescription("[Link](https://www.epicgames.com/store/tr/free-games)")
      .setTimestamp()
      return message.channel.sendEmbed(epicgames);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['epicgames'],
  permLevel: 0
};

exports.help = {
  name: 'epic games beleş oyun',
  description: 'Epic Games Store daki bu haftaki beleş oyun.',
  usage: 't-epicgames'
};
