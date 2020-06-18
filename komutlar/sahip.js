const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Sahip komutları**")
    .setColor("RANDOM")
    .addField("t-reboot", "Botu yeniden başlatır")
    .setDescription("__***Bot Sahibi : AdoBe#4846***__")
    .setFooter("RyZeN Bot v1.1 © 2020")
    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};