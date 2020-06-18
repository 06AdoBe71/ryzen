const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "🤖RyZeN Bot Komut Listesi",
              icon_url: "https://cdn.discordapp.com/attachments/663734944517849108/722127113360244786/Blue_and_White_Gaming_Logo.png"
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/attachments/663734944517849108/722034602390192209/JPEG_20200602_204639.jpg"
			},
            title: "📜 Komutlar 📜",
            description: "📌t-avatar\n📌t-ban\n📌t-bayrak\n📌t-çekiliş\n📌t-duyuru\n📌t-emojikur\n📌t-emojiyazı\n📌t-ısmarla\n📌t-istatistik\n📌t-kick\n📌t-kullanıcıbilgim\n📌t-mesajdöndür\n📌t-mute\n📌t-oylama\n📌t-ping\n📌t-reklam-engelle aç\n📌t-rol-al\n📌t-rol-ver\n📌t-sahip\n📌t-sunucubilgi\n📌t-sunucukur\n📌t-tekmeat\n📌t-temizle\n📌t-unmute\n📌t-uyar\n📌t-wasted\n📌t-yaz",
            fields: [
				{
                name: ".",
				inline: true,
                value: "."
			  },
			  	{
                name: ".",
				inline: true,
                value: "."
			  },
				{
                name: ".",
				inline: true,
                value: ".",
              },
            ],
          }
        });  
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'yardım', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
