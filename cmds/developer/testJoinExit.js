const discord = require("discord.js");
module.exports = {
  config: {
    nombre: "ts",
    alias: ["testserver"]
  },
  run: async (client, message, args) => {
    let embed2 = new discord.MessageEmbed()
      .setTitle(`:x: Este comando solo lo puede usar el propietario del bot`)
      .setColor("#FF0000");
    if (message.author.id !== "356817504330448906")
      return message.channel.send(embed2);

    let embede = new discord.MessageEmbed()
      .setAuthor(`📥 >> | Simulando Salida del Servidor`)
      .addField("👤 Usuario:", message.author)
      .addField("📡 ID Canal:", message.guild.id)
      .setColor("GREEN")
      .setThumbnail(message.guild.iconURL())
      .setFooter(client.user.username, client.user.avatarURL())
      .setTimestamp()
      .setColor("ORANGE");

    let embedj = new discord.MessageEmbed()
      .setAuthor(`📥 >> | Simulando Entrada al Servidor`)
      .addField("👤 Usuario:", message.author)
      .addField("📡 ID Canal:", message.guild.id)
      .setColor("GREEN")
      .setThumbnail(message.guild.iconURL())
      .setFooter(client.user.username, client.user.avatarURL())
      .setTimestamp()
      .setColor("ORANGE");

    if (args[0] === "j" || args[0] === "join") {
      client.emit(
        "guildMemberAdd",
        message.member || (await message.guild.member.fetch(message.author))
      );
      message.channel.send(embedj);
    } else if (args[0] === "e" || args[0] === "exit") {
      client.emit(
        "guildMemberRemove",
        message.member || (await message.guild.member.fetch(message.author))
      );
      message.channel.send(embede);
    }
  }
};
