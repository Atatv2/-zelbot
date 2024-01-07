const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "yardım",
aliases: ["y", "cmd"],
run: async(client, message, args) => {
	const yardım = new MessageEmbed()
	.setAuthor(`yardım`, client.user.displayAvatarURL())
	.setDescription(`**Tüm Komutlarımın Listesi**`)
.setThumbnail(client.user.displayAvatarURL())
		.setColor(client.embedcolor)
		.addField(`> Tabancalar`, '`s!b6`, `s!b6c`, `s!bcm`')
	.addField(`> Uptime`, '`s!uptime`, `s!kaldır`, `s!istatistik`, `s!toplam`')
	.setFooter(client.user.username)
.setTimestamp()
.setFooter(`Silah Sanayi`, client.user.displayAvatarURL())
	message.channel.send(yardım)

}
}
