const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = { 
    config: {
        nombre: "eval",
        alias: ["evaluar"]
    },
  run: async (client, message, args) => {
  if (message.author.id === "356817504330448906") { //return message.channel.send('Nope.');

		const clean = text => {
			if (typeof (text) === "string")
				return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
			else
				return text;
		}
		let devText = args.join(" ");

		try {
			const code = args.join(" ");
			let evaled = eval(code);

			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);

			//let outputText = `clean(evaled), {code:"xl"}`;

			let embed = new Discord.MessageEmbed()
      .setTitle(client.user.username+" Eval")
      .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
				.addField("Entrada :inbox_tray:", `\`\`\`js\n${devText}\`\`\``)
				.addField("Salida :outbox_tray:", `\`\`\`js\n${clean(evaled)}\`\`\``)
				.setColor("#FFC2FB")
      .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true}))
      .setTimestamp()

			message.channel.send(embed);

			//message.channel.send(clean(evaled), {code:"xl"});
		} catch (err) {
      let embed1 = new Discord.MessageEmbed()
      .setTitle(client.user.username+" Eval")
      .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
      .addField("Entrada :inbox_tray:", `\`\`\`js\n${devText}\`\`\``)
				.addField(":x: Ha habido un error", `\`\`\`js\n${clean(err)}\n\`\`\``)
				.setColor("#FF0000")
      .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true}))
      .setTimestamp()
			message.channel.send(embed1);
		}
	} else {
		    let embed2 = new Discord.MessageEmbed()
      .setTitle(`:x: Este comando solo lo puede usar el propietario del bot`)
      .setColor("#FF0000")
		return message.channel.send(embed2);
	}
}
  }