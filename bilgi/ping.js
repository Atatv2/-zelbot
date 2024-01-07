module.exports = {
	name: "ping",
	run: async(client, message, args) => {
		
message.channel.send(`**Pingim:** \`${client.ws.ping} ms\``)
}
}