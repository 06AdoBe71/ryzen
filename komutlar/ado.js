const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
        let adobe = message.guild.members.get('614408768733708288');
        const ado = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .addField("📜Ad: AdoBe#4846")
      .addField("✍Durum: Çevrimiçi")
      .addField(':video_game:Şu an oynadığı oyun:', `${adobe.presence.game ? adobe.presence.game.name : 'şuan oyun oynamıyor'}`)
      .setTimestamp()
      console.log("Ado komutu " + message.author.username + " tarafından kullanıldı.")
      return message.channel.sendEmbed(ado);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ado'],
  permLevel: 0
};

exports.help = {
  name: 'ado',
  description: 'AdoBe hakkında bilgi verir.',
  usage: 't-ado'
};