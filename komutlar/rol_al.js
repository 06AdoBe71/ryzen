const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`rol-al` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply('**Kimden Rol alacağımı Yazmadın!**').catch(console.error);
  if (rol.length < 1) return message.reply('**Rol idsini belirtmedin**');
user.remoRole(rol);
  message.channel.send("**Rol başarıyla alındı !** :ok_hand: ")

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rol-al',
  description: 'İstediğiniz kişiden istediğiniz rolü alır.',
  usage: 'rol-al [@kullanıcı] [@rol]'
};
const client = new Discord.Client();
client.on("message", async message => {
  if(message.author.bot) return;
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
  if(message.content.indexOf(prefix) !== 0) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];


  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client, message, args)

})