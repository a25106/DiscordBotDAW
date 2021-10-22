const Discord = require("discord.js");
const { Permissions } = require("discord.js");
module.exports = {
  config: {
    nombre: "añadir",
    alias: ["add"]
  },
  run: async (client, message, args) => {
    global.tiempo = false;
    const filtro = m => m.author.id === message.author.id;
    var canal;


    if (!args[0]) {
      let embed1 = new Discord.MessageEmbed()
        .setTitle("Escribe la ID del canal a editar")
        .setDescription(
          '*(Ej: __892376150171590676__)*\n\n**¿Cómo conseguir la ID?**\n\n*1º Activa el "Modo Desarrollador" en "Ajustes" > "Avanzado" o "Comportamiento"*\n\n*2º Copia la ID dándole con el click derecho o manteniendo pulsado sobre la persona o canal que hayas elegido*'
        )
        .setColor("#ffff00")
        .setThumbnail(
          "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
        )
        .setFooter("Si quieres parar el proceso, reacciona a la papelera");

      let mesg = await message.channel.send(embed1);
      await mesg.react("🗑");
      const filter1 = (reaction, user) =>
        ["🗑"].includes(reaction.emoji.name) &&
        user.id == message.member.id &&
        user.id !== client.user.id;
      mesg
        .awaitReactions(filter1, {
          max: 1
        })
        .then(async collected => {
          mesg.delete();
          global.tiempo = true;
        });
      message.channel
        .awaitMessages(filtro, { max: 1, time: 120000 })
        .then(async col => {
          if (global.tiempo) return;
          mesg.reactions.removeAll();
          let txt = col.first();
          canal = await message.guild.channels.cache.get(txt.content);
    let permisos = canal.permissionOverwrites.get(message.author.id);
    const bitPermissions = new Permissions(permisos.allow.bitfield);
          if (
            !bitPermissions.has([
              Permissions.FLAGS.MANAGE_CHANNELS,
              Permissions.FLAGS.MANAGE_ROLES,
              Permissions.FLAGS.VIEW_CHANNEL
            ])
          ) {
            let embedperms = new Discord.MessageEmbed()
              .setTitle(":x: No tienes permisos para hacer esto")
              .setColor("ff0000");
            return message.channel.send(embedperms);
          }
        })
        .then(async () => {
          let embed = new Discord.MessageEmbed()
            .setTitle("Escribe la id del Usuario")
            .setDescription(
              '*(Ej: __892354981468962826__)*\n\n**¿Cómo conseguir la ID?**\n\n*1º Activa el "Modo Desarrollador" en "Ajustes" > "Avanzado" o "Comportamiento"*\n\n*2º Copia la ID dándole con el click derecho o manteniendo pulsado sobre la persona o canal que hayas elegido*'
            )
            .setColor("#ffff00")
            .setThumbnail(
              "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
            )
            .setFooter("Si quieres parar el proceso, reacciona a la papelera");

          let msg = await message.channel.send(embed);
          await msg.react("🗑");
          const filter = (reaction, user) =>
            ["🗑"].includes(reaction.emoji.name) &&
            user.id == message.member.id &&
            user.id !== client.user.id;
          msg
            .awaitReactions(filter, {
              max: 1
            })
            .then(async collected => {
              msg.delete();
              global.tiempo = true;
            });
          message.channel
            .awaitMessages(filtro, { max: 1, time: 120000 })
            .then(async col => {
              if (global.tiempo) return;
              msg.reactions.removeAll();
              let txt = col.first();
              if (txt.content == message.author.id) {
                let embederr = new Discord.MessageEmbed()
                  .setTitle(":x: No puedes poner tu ID")
                  .setColor("ff0000");
                message.channel.send(embederr);
                return msg.delete();
              }

              let usuario = await message.channel.guild.members
                .fetch(txt.content)
                .catch(e => {
                  let embederr = new Discord.MessageEmbed()
                    .setTitle(":x: Pon una ID correcta")
                    .setColor("ff0000");
                  message.channel.send(embederr);
                  return msg.delete();
                });

              if (
                usuario == undefined ||
                txt.content.length != 18 ||
                isNaN(txt.content)
              ) {
              }

              canal.createOverwrite(usuario.user.id, {
                VIEW_CHANNEL: true
              });
              let embed = new Discord.MessageEmbed()
                .setTitle(":white_check_mark: Usuario añadido correctamente")
                .setDescription(
                  "**Canal editado**:<#" +
                    canal.id +
                    ">\n**Usuario añadido**: <@" +
                    txt.content +
                    ">"
                )
                .setColor("00ff00");
              message.channel.send(embed);
              msg.delete();
            });
        });
    } else {
      if (args[0] == message.author.id) {
        let embederr = new Discord.MessageEmbed()
          .setTitle(":x: No puedes poner tu ID")
          .setColor("ff0000");
        message.channel.send(embederr);
        return;
      }

      let usuario = await message.channel.guild.members
        .fetch(args[0])
        .catch(e => {
          let embederr = new Discord.MessageEmbed()
            .setTitle(":x: Pon una ID correcta")
            .setColor("ff0000");
          message.channel.send(embederr);
          return;
        });
      if (usuario == undefined || args[0].length != 18 || isNaN(args[0])) {
        let embederr = new Discord.MessageEmbed()
          .setTitle(":x: Pon una ID correcta")
          .setColor("ff0000");
        message.channel.send(embederr);
        return;
      }
      if (!args[1]) {
        let embederr = new Discord.MessageEmbed()
          .setTitle(":x: Menciona el canal que quieres editar")
          .setDescription(
            "*(Ej: !add 123456789012345678 <#892376150171590676>)*"
          )
          .setColor("ff0000");
        message.channel.send(embederr);
        return;
      }
      let channel = message.mentions.channels.first();
          let permisos = channel.permissionOverwrites.get(message.author.id);
    const bitPermissions = new Permissions(permisos.allow.bitfield);
      if (
        !bitPermissions.has([
          Permissions.FLAGS.MANAGE_CHANNELS,
          Permissions.FLAGS.MANAGE_ROLES,
          Permissions.FLAGS.VIEW_CHANNEL
        ])
      ) {
        let embedperms = new Discord.MessageEmbed()
          .setTitle(":x: No tienes permisos para hacer esto")
          .setColor("ff0000");
        return message.channel.send(embedperms);
      }
      channel.createOverwrite(usuario.user.id, { VIEW_CHANNEL: true });
      let embed = new Discord.MessageEmbed()
        .setTitle(":white_check_mark: Usuario añadido correctamente")
        .setDescription(
          "**Canal editado**:<#" +
            channel.id +
            ">\n**Usuario añadido**: <@" +
            args[0] +
            ">"
        )
        .setColor("00ff00");
      message.channel.send(embed);
    }
  }
};
