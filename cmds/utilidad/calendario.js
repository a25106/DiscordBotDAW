const Discord = require("discord.js");
const db = require("megadb");
let eventos = new db.crearDB("eventos");
const Pagination = require("discord-paginationembed");
module.exports = {
  config: {
    nombre: "calendario",
    alias: ["calendar", "scheudle"]
  },
  run: async (client, message, args) => {
    var actualUnix = Math.floor(Date.now() / 1000);
let a;
    global.tiempo = false;
    const filtro = m => m.author.id === message.author.id;
    var asignatura;
    let embederr = new Discord.MessageEmbed()
      .setTitle(":x: Ese evento no existe")
      .setDescription("Asegurate de escribirlo bien")
      .setColor("#ff0000");
        let embedNaN = new Discord.MessageEmbed()
      .setTitle(":x: El tiempo solo pueden ser números")
      .setDescription("Asegurate de usar [Unix Timestamp](https://www.unixtimestamp.com)")
      .setColor("#ff0000");
    var embed = new Discord.MessageEmbed()
      .setTitle("Añadiendo Evento al Calendario")
      .setDescription("**Escribe el nombre del evento:**")
      .setColor("#ffff00")
      .setThumbnail(
        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
      )
      .setFooter("Si quieres parar el proceso, reacciona a la papelera");
    
        var embedd = new Discord.MessageEmbed()
      .setTitle("Removiendo Evento del Calendario")
      .setDescription("**Escribe el nombre del evento:**\n\n*(Asegurate de escribirlo exactamente igual)*")
      .setColor("#ffff00")
      .setThumbnail(
        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
      )
      .setFooter("Si quieres parar el proceso, reacciona a la papelera");

    var embed2 = new Discord.MessageEmbed()
      .setTitle("Añadiendo Evento al Calendario")
      .setColor("RANDOM")
      .setThumbnail(
        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
      )
      .setDescription(
        "**Elige una Asignatura:**\n\n💻 → Programación\n\n📚 → Bases de Datos\n\n📠 → Sistemas Informáticos\n\n📑 → Lenguajes de Marcas\n\n📟 → Entornos de Desarrollo\n\n💰 → F.O.L\n\n💂 → Inglés\n\n🔗 → Otros"
      )
      .setFooter("Si quieres cancelar la sugerencia, reacciona a la papelera");

    var embed22 = new Discord.MessageEmbed()
      .setTitle("Removiendo Evento del Calendario")
      .setColor("RANDOM")
      .setThumbnail(
        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
      )
      .setDescription(
        "**Elige una Asignatura:**\n\n💻 → Programación\n\n📚 → Bases de Datos\n\n📠 → Sistemas Informáticos\n\n📑 → Lenguajes de Marcas\n\n📟 → Entornos de Desarrollo\n\n💰 → F.O.L\n\n💂 → Inglés\n\n🔗 → Otros"
      )
      .setFooter("Si quieres cancelar la sugerencia, reacciona a la papelera"); 
    
    var embed3 = new Discord.MessageEmbed()
      .setTitle("Añadiendo Evento al Calendario")
      .setDescription(
        "**Escribe el tiempo del evento [(En Unix Timestamp)](https://www.unixtimestamp.com):**"
      )
      .setColor("#ffff00")
      .setThumbnail(
        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
      )
      .setFooter("Si quieres parar el proceso, reacciona a la papelera");

    //INICIO

    if (!args[0]) {
      let prog1 = await eventos.obtener("1ºDAW.programacion");
      prog1.forEach(async v => {
        if (v.unix + 86400 <= actualUnix) {
          eventos.extract("1ºDAW.programacion", v);
        }
      });
      let prog = await eventos.obtener("1ºDAW.programacion");
      prog.sort(compare);
      var progtxt = "";
      prog.map(async v => {
        progtxt += "- **" + v.nombre + "**: \n<t:" + v.unix + ":R>\n\n";
      });

      let basdat1 = await eventos.obtener("1ºDAW.basesdedatos");
      basdat1.forEach(async v => {
        if (v.unix + 86400 <= actualUnix) {
          eventos.extract("1ºDAW.basesdedatos", v);
        }
      });
      let basdat = await eventos.obtener("1ºDAW.basesdedatos");
      basdat.sort(compare);
      var basdattxt = "";
      basdat.map(async v => {
        basdattxt += "- **" + v.nombre + "**: \n<t:" + v.unix + ":R>\n\n";
      });

      let sisinfo1 = await eventos.obtener("1ºDAW.sistemasinformaticos");
      sisinfo1.forEach(async v => {
        if (v.unix + 86400 <= actualUnix) {
          eventos.extract("1ºDAW.sistemasinformaticos", v);
        }
      });
      let sisinfo = await eventos.obtener("1ºDAW.sistemasinformaticos");
      sisinfo.sort(compare);
      var sisinfotxt = "";
      sisinfo.map(async v => {
        sisinfotxt += "- **" + v.nombre + "**: \n<t:" + v.unix + ":R>\n\n";
      });

      let lenmar1 = await eventos.obtener("1ºDAW.lenguajesdemarcas");
      lenmar1.forEach(async v => {
        if (v.unix + 86400 <= actualUnix) {
          eventos.extract("1ºDAW.lenguajesdemarcas", v);
        }
      });
      let lenmar = await eventos.obtener("1ºDAW.lenguajesdemarcas");
      lenmar.sort(compare);
      var lenmartxt = "";
      lenmar.map(async v => {
        lenmartxt += "- **" + v.nombre + "**: \n<t:" + v.unix + ":R>\n\n";
      });

      let endes1 = await eventos.obtener("1ºDAW.entornosdedesarrollo");
      endes1.forEach(async v => {
        if (v.unix + 86400 <= actualUnix) {
          eventos.extract("1ºDAW.entornosdedesarrollo", v);
        }
      });
      let endes = await eventos.obtener("1ºDAW.entornosdedesarrollo");
      endes.sort(compare);
      var endestxt = "";
      endes.map(async v => {
        endestxt += "- **" + v.nombre + "**: \n<t:" + v.unix + ":R>\n\n";
      });

      let fol1 = await eventos.obtener("1ºDAW.fol");
      fol1.forEach(async v => {
        if (v.unix + 86400 <= actualUnix) {
          eventos.extract("1ºDAW.fol", v);
        }
      });
      let fol = await eventos.obtener("1ºDAW.fol");
      fol.sort(compare);
      var foltxt = "";
      fol.map(async v => {
        foltxt += "- **" + v.nombre + "**: \n<t:" + v.unix + ":R>\n\n";
      });

      let ing1 = await eventos.obtener("1ºDAW.ingles");
      ing1.forEach(async v => {
        if (v.unix + 86400 <= actualUnix) {
          eventos.extract("1ºDAW.ingles", v);
        }
      });
      let ing = await eventos.obtener("1ºDAW.ingles");
      ing.sort(compare);
      var ingtxt = "";
      ing.forEach(async v => {
        ingtxt += "- **" + v.nombre + "**: \n<t:" + v.unix + ":R>\n\n";
      });

      let otros1 = await eventos.obtener("1ºDAW.otros");
      otros1.forEach(async v => {
        if (v.unix + 86400 <= actualUnix) {
          eventos.extract("1ºDAW.otros", v);
        }
      });
      let otros = await eventos.obtener("1ºDAW.otros");
      otros.sort(compare);
      var otrostxt = "";
      otros.map(async v => {
        otrostxt += "- **" + v.nombre + "**: \n<t:" + v.unix + ":R>\n\n";
      });

      let cal = new Discord.MessageEmbed()
        .setTitle("📆 CALENDARIO DE EVENTOS 1/3 📆")
        .addField("💻 Programación", progtxt ? progtxt : "----", false)
        .addField("📚 Bases de Datos", basdattxt ? basdattxt : "----", false)
        .addField(
          "📠 Sistemas Informáticos",
          sisinfotxt ? sisinfotxt : "----",
          false
        )
        .setFooter(client.user.username, client.user.avatarURL())
        .setTimestamp()
        .setColor("RANDOM");
      let cal1 = new Discord.MessageEmbed()
        .setTitle("📆 CALENDARIO DE EVENTOS 2/3 📆")
        .addField(
          "📑 Lenguajes de Marcas",
          lenmartxt ? lenmartxt : "----",
          false
        )
        .addField(
          "📟 Entornos de Desarrollo",
          endestxt ? endestxt : "----",
          false
        )
        .addField("💰 F.O.L.", foltxt ? foltxt : "----", false)
        .setFooter(client.user.username, client.user.avatarURL())
        .setTimestamp()
        .setColor("RANDOM");
      let cal2 = new Discord.MessageEmbed()
        .setTitle("📆 CALENDARIO DE EVENTOS 3/3 📆")
        .addField("💂 Inglés", ingtxt ? ingtxt : "----", false)
        .addField("🔗 Otros", otrostxt ? otrostxt : "----", false)
        .setFooter(client.user.username, client.user.avatarURL())
        .setTimestamp()
        .setColor("RANDOM");

      let pages = [cal, cal1, cal2];

      const Embeds = new Pagination.Embeds()
        .setArray(pages)
        .setAuthorizedUsers([message.author.id])
        .setChannel(message.channel)
        .setPageIndicator(false)
        .setPage(1)
        .setDisabledNavigationEmojis(["jump"])
        .build();

      //AÑADIR
    } else if (args[0] == "add" || args[0] == "añadir") {
      let mesg = await message.channel.send(embed2);
      await mesg.react("💻");
      await mesg.react("📚");
      await mesg.react("📠");
      await mesg.react("📑");
      await mesg.react("📟");
      await mesg.react("💰");
      await mesg.react("💂");
      await mesg.react("🔗");
      await mesg.react("🗑");
      const filter1 = (reaccion, user) =>
        ["💻", "📚", "📠", "📑", "📟", "💰", "💂", "🔗", "🗑"].includes(
          reaccion.emoji.name
        ) &&
        user.id == message.member.id &&
        user.id !== client.user.id;
      mesg
        .awaitReactions(filter1, {
          max: 1
        })
        .then(async collected => {
          const reaccion = collected.first();

          if (reaccion.emoji.name === "💻") {
            mesg.delete();
            asignatura = "💻 Programación";
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
                let texto = col.first();
                let msg2 = await msg.edit(embed3);
                await msg2.react("🗑");
                const filter2 = (reaction2, user2) =>
                  ["🗑"].includes(reaction2.emoji.name) &&
                  user2.id == message.member.id &&
                  user2.id !== client.user.id;
                msg2
                  .awaitReactions(filter2, {
                    max: 1
                  })
                  .then(async collected => {
                    msg2.delete();
                    global.tiempo = true;
                  });
                message.channel
                  .awaitMessages(filtro, { max: 1, time: 120000 })
                  .then(async col2 => {
                    if (global.tiempo) return;
                    msg2.delete();
                    let texto2 = col2.first();
if (isNaN(texto2.content)){return message.channel.send(embedNaN)}
                    let finembed = new Discord.MessageEmbed()
                      .setTitle("CREACIÓN FINALIZADA ✅")
                      .setDescription(
                        "**Asignatura asignada**: " +
                          asignatura +
                          "\n\n**Nombre del evento:** " +
                          texto.content +
                          "\n\n**Fecha del evento** <t:" +
                          texto2.content +
                          ":R>"
                      )
                      .setColor("#00FF00")
                      .setThumbnail(
                        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                      );
                    let contenido1 = texto.content;
                    let contenido2 = texto2.content;
                    message.channel.send(finembed);
                    eventos.push("1ºDAW.programacion", {
                      nombre: contenido1,
                      unix: parseInt(contenido2)
                    });
                  });
              });
          } else if (reaccion.emoji.name === "📚") {
            mesg.delete();
            asignatura = "📚 Bases de Datos";
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
                let texto = col.first();
                let msg2 = await msg.edit(embed3);
                await msg2.react("🗑");
                const filter2 = (reaction2, user2) =>
                  ["🗑"].includes(reaction2.emoji.name) &&
                  user2.id == message.member.id &&
                  user2.id !== client.user.id;
                msg2
                  .awaitReactions(filter2, {
                    max: 1
                  })
                  .then(async collected => {
                    msg2.delete();
                    global.tiempo = true;
                  });
                message.channel
                  .awaitMessages(filtro, { max: 1, time: 120000 })
                  .then(async col2 => {
                    if (global.tiempo) return;
                    msg2.delete();
                    let texto2 = col2.first();
if (isNaN(texto2.content)){return message.channel.send(embedNaN)}

                    let finembed = new Discord.MessageEmbed()
                      .setTitle("CREACIÓN FINALIZADA ✅")
                      .setDescription(
                        "**Asignatura asignada**: " +
                          asignatura +
                          "\n\n**Nombre del evento:** " +
                          texto.content +
                          "\n\n**Fecha del evento** <t:" +
                          texto2.content +
                          ":R>"
                      )
                      .setColor("#00FF00")
                      .setThumbnail(
                        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                      );
                    let contenido1 = texto.content;
                    let contenido2 = texto2.content;
                    message.channel.send(finembed);
                    eventos.push("1ºDAW.basesdedatos", {
                      nombre: contenido1,
                      unix: parseInt(contenido2)
                    });
                  });
              });
          } else if (reaccion.emoji.name === "📠") {
            mesg.delete();
            asignatura = "📠 Sistemas Informáticos";
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
                let texto = col.first();
                let msg2 = await msg.edit(embed3);
                await msg2.react("🗑");
                const filter2 = (reaction2, user2) =>
                  ["🗑"].includes(reaction2.emoji.name) &&
                  user2.id == message.member.id &&
                  user2.id !== client.user.id;
                msg2
                  .awaitReactions(filter2, {
                    max: 1
                  })
                  .then(async collected => {
                    msg2.delete();
                    global.tiempo = true;
                  });
                message.channel
                  .awaitMessages(filtro, { max: 1, time: 120000 })
                  .then(async col2 => {
                    if (global.tiempo) return;
                    msg2.delete();
                    let texto2 = col2.first();
if (isNaN(texto2.content)){return message.channel.send(embedNaN)}

                    let finembed = new Discord.MessageEmbed()
                      .setTitle("CREACIÓN FINALIZADA ✅")
                      .setDescription(
                        "**Asignatura asignada**: " +
                          asignatura +
                          "\n\n**Nombre del evento:** " +
                          texto.content +
                          "\n\n**Fecha del evento** <t:" +
                          texto2.content +
                          ":R>"
                      )
                      .setColor("#00FF00")
                      .setThumbnail(
                        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                      );
                    let contenido1 = texto.content;
                    let contenido2 = texto2.content;
                    message.channel.send(finembed);
                    eventos.push("1ºDAW.sistemasinformaticos", {
                      nombre: contenido1,
                      unix: parseInt(contenido2)
                    });
                  });
              });
          } else if (reaccion.emoji.name === "📑") {
            mesg.delete();
            asignatura = "📑 Lenguajes de Marcas";
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
                let texto = col.first();
                let msg2 = await msg.edit(embed3);
                await msg2.react("🗑");
                const filter2 = (reaction2, user2) =>
                  ["🗑"].includes(reaction2.emoji.name) &&
                  user2.id == message.member.id &&
                  user2.id !== client.user.id;
                msg2
                  .awaitReactions(filter2, {
                    max: 1
                  })
                  .then(async collected => {
                    msg2.delete();
                    global.tiempo = true;
                  });
                message.channel
                  .awaitMessages(filtro, { max: 1, time: 120000 })
                  .then(async col2 => {
                    if (global.tiempo) return;
                    msg2.reactions.removeAll();
                    let texto2 = col2.first();
if (isNaN(texto2.content)){return message.channel.send(embedNaN)}

                    let finembed = new Discord.MessageEmbed()
                      .setTitle("CREACIÓN FINALIZADA ✅")
                      .setDescription(
                        "**Asignatura asignada**: " +
                          asignatura +
                          "\n\n**Nombre del evento:** " +
                          texto.content +
                          "\n\n**Fecha del evento** <t:" +
                          texto2.content +
                          ":R>"
                      )
                      .setColor("#00FF00")
                      .setThumbnail(
                        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                      );
                    let contenido1 = texto.content;
                    let contenido2 = texto2.content;
                    message.channel.send(finembed);
                    eventos.push("1ºDAW.lenguajesdemarcas", {
                      nombre: contenido1,
                      unix: parseInt(contenido2)
                    });
                  });
              });
          } else if (reaccion.emoji.name === "📟") {
            mesg.delete();
            asignatura = "📟 Entornos de Desarrollo";
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
                let texto = col.first();
                let msg2 = await msg.edit(embed3);
                await msg2.react("🗑");
                const filter2 = (reaction2, user2) =>
                  ["🗑"].includes(reaction2.emoji.name) &&
                  user2.id == message.member.id &&
                  user2.id !== client.user.id;
                msg2
                  .awaitReactions(filter2, {
                    max: 1
                  })
                  .then(async collected => {
                    msg2.delete();
                    global.tiempo = true;
                  });
                message.channel
                  .awaitMessages(filtro, { max: 1, time: 120000 })
                  .then(async col2 => {
                    if (global.tiempo) return;
                    msg2.reactions.removeAll();
                    let texto2 = col2.first();
if (isNaN(texto2.content)){return message.channel.send(embedNaN)}

                    let finembed = new Discord.MessageEmbed()
                      .setTitle("CREACIÓN FINALIZADA ✅")
                      .setDescription(
                        "**Asignatura asignada**: " +
                          asignatura +
                          "\n\n**Nombre del evento:** " +
                          texto.content +
                          "\n\n**Fecha del evento** <t:" +
                          texto2.content +
                          ":R>"
                      )
                      .setColor("#00FF00")
                      .setThumbnail(
                        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                      );
                    let contenido1 = texto.content;
                    let contenido2 = texto2.content;
                    message.channel.send(finembed);
                    eventos.push("1ºDAW.entornosdedesarrollo", {
                      nombre: contenido1,
                      unix: parseInt(contenido2)
                    });
                  });
              });
          } else if (reaccion.emoji.name === "💰") {
            mesg.delete();
            asignatura = "💰 F.O.L.";
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
                let texto = col.first();
                let msg2 = await msg.edit(embed3);
                await msg2.react("🗑");
                const filter2 = (reaction2, user2) =>
                  ["🗑"].includes(reaction2.emoji.name) &&
                  user2.id == message.member.id &&
                  user2.id !== client.user.id;
                msg2
                  .awaitReactions(filter2, {
                    max: 1
                  })
                  .then(async collected => {
                    msg2.delete();
                    global.tiempo = true;
                  });
                message.channel
                  .awaitMessages(filtro, { max: 1, time: 120000 })
                  .then(async col2 => {
                    if (global.tiempo) return;
                    msg2.reactions.removeAll();
                    let texto2 = col2.first();
if (isNaN(texto2.content)){return message.channel.send(embedNaN)}

                    let finembed = new Discord.MessageEmbed()
                      .setTitle("CREACIÓN FINALIZADA ✅")
                      .setDescription(
                        "**Asignatura asignada**: " +
                          asignatura +
                          "\n\n**Nombre del evento:** " +
                          texto.content +
                          "\n\n**Fecha del evento** <t:" +
                          texto2.content +
                          ":R>"
                      )
                      .setColor("#00FF00")
                      .setThumbnail(
                        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                      );
                    let contenido1 = texto.content;
                    let contenido2 = texto2.content;
                    message.channel.send(finembed);
                    eventos.push("1ºDAW.fol", {
                      nombre: contenido1,
                      unix: parseInt(contenido2)
                    });
                  });
              });
          } else if (reaccion.emoji.name === "💂") {
            mesg.delete();
            asignatura = "💂 Inglés";
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
                let texto = col.first();
                let msg2 = await msg.edit(embed3);
                await msg2.react("🗑");
                const filter2 = (reaction2, user2) =>
                  ["🗑"].includes(reaction2.emoji.name) &&
                  user2.id == message.member.id &&
                  user2.id !== client.user.id;
                msg2
                  .awaitReactions(filter2, {
                    max: 1
                  })
                  .then(async collected => {
                    msg2.delete();
                    global.tiempo = true;
                  });
                message.channel
                  .awaitMessages(filtro, { max: 1, time: 120000 })
                  .then(async col2 => {
                    if (global.tiempo) return;
                    msg2.delete();
                    let texto2 = col2.first();
if (isNaN(texto2.content)){return message.channel.send(embedNaN)}

                    let finembed = new Discord.MessageEmbed()
                      .setTitle("CREACIÓN FINALIZADA ✅")
                      .setDescription(
                        "**Asignatura asignada**: " +
                          asignatura +
                          "\n\n**Nombre del evento:** " +
                          texto.content +
                          "\n\n**Fecha del evento** <t:" +
                          texto2.content +
                          ":R>"
                      )
                      .setColor("#00FF00")
                      .setThumbnail(
                        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                      );
                    let contenido1 = texto.content;
                    let contenido2 = texto2.content;
                    message.channel.send(finembed);
                    eventos.push("1ºDAW.ingles", {
                      nombre: contenido1,
                      unix: parseInt(contenido2)
                    });
                  });
              });
          } else if (reaccion.emoji.name === "🔗") {
            mesg.delete();
            asignatura = "🔗 Otros";
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
                let texto = col.first();
                let msg2 = await msg.edit(embed3);
                await msg2.react("🗑");
                const filter2 = (reaction2, user2) =>
                  ["🗑"].includes(reaction2.emoji.name) &&
                  user2.id == message.member.id &&
                  user2.id !== client.user.id;
                msg2
                  .awaitReactions(filter2, {
                    max: 1
                  })
                  .then(async collected => {
                    msg2.delete();
                    global.tiempo = true;
                  });
                message.channel
                  .awaitMessages(filtro, { max: 1, time: 120000 })
                  .then(async col2 => {
                    if (global.tiempo) return;
                    msg2.delete();
                    let texto2 = col2.first();
if (isNaN(texto2.content)){return message.channel.send(embedNaN)}

                    let finembed = new Discord.MessageEmbed()
                      .setTitle("CREACIÓN FINALIZADA ✅")
                      .setDescription(
                        "**Asignatura asignada**: " +
                          asignatura +
                          "\n\n**Nombre del evento:** " +
                          texto.content +
                          "\n\n**Fecha del evento** <t:" +
                          texto2.content +
                          ":R>"
                      )
                      .setColor("#00FF00")
                      .setThumbnail(
                        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                      );
                    let contenido1 = texto.content;
                    let contenido2 = texto2.content;
                    message.channel.send(finembed);
                    eventos.push("1ºDAW.otros", {
                      nombre: contenido1,
                      unix: parseInt(contenido2)
                    });
                  });
              });
          } else if (reaccion.emoji.name === "🗑") {
            mesg.delete();
          }
        });

      //REMOVER
    } else if (args[0] == "remover" || args[0] == "remove") {
      let mesg = await message.channel.send(embed22);
      await mesg.react("💻");
      await mesg.react("📚");
      await mesg.react("📠");
      await mesg.react("📑");
      await mesg.react("📟");
      await mesg.react("💰");
      await mesg.react("💂");
      await mesg.react("🔗");
      await mesg.react("🗑");
      const filter1 = (reaccion, user) =>
        ["💻", "📚", "📠", "📑", "📟", "💰", "💂", "🔗", "🗑"].includes(
          reaccion.emoji.name
        ) &&
        user.id == message.member.id &&
        user.id !== client.user.id;
      mesg
        .awaitReactions(filter1, {
          max: 1
        })
        .then(async collected => {
          const reaccion = collected.first();

          if (reaccion.emoji.name === "💻") {
            mesg.delete();
            asignatura = "💻 Programación";
            let msg = await message.channel.send(embedd);
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
                let texto = col.first();

                let finembed = new Discord.MessageEmbed()
                  .setTitle("ELIMINACIÓN FINALIZADA ✅")
                  .setDescription(
                    "**Asignatura seleccionada**: " +
                      asignatura +
                      "\n\n**Nombre del evento eliminado:** " +
                      texto.content
                  )
                  .setColor("#00FF00")
                  .setThumbnail(
                    "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                  );
                let contenido1 = texto.content;

                let obtener = await eventos.obtener("1ºDAW.programacion");
                obtener.map(async v => {
                  if (v.nombre.toLowerCase() == contenido1.toLowerCase()) {
                    eventos.extract("1ºDAW.programacion", v);
                  } else {
                    a = "pito"
                    return message.channel.send(embederr);
                    
                  }
                });
              if(a=="pito")return;
                message.channel.send(finembed);
              });
          } else if (reaccion.emoji.name === "📚") {
            mesg.delete();
            asignatura = "📚 Bases de Datos";
            let msg = await message.channel.send(embedd);
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
                let texto = col.first();

                let finembed = new Discord.MessageEmbed()
                  .setTitle("ELIMINACIÓN FINALIZADA ✅")
                  .setDescription(
                    "**Asignatura seleccionada**: " +
                      asignatura +
                      "\n\n**Nombre del evento eliminado:** " +
                      texto.content
                  )
                  .setColor("#00FF00")
                  .setThumbnail(
                    "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                  );
                let contenido1 = texto.content;

                let obtener = await eventos.obtener("1ºDAW.basesdedatos");
                obtener.map(async v => {
                  if (v.nombre.toLowerCase() == contenido1.toLowerCase()) {
                    eventos.extract("1ºDAW.basesdedatos", v);
                  } else {
                    a = "pito"
                    return message.channel.send(embederr);
                  }
                });
              if(a=="pito")return;
                message.channel.send(finembed);
              });
          } else if (reaccion.emoji.name === "📠") {
            mesg.delete();
            asignatura = "📠 Sistemas Informáticos";
            let msg = await message.channel.send(embedd);
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
                let texto = col.first();

                let finembed = new Discord.MessageEmbed()
                  .setTitle("ELIMINACIÓN FINALIZADA ✅")
                  .setDescription(
                    "**Asignatura seleccionada**: " +
                      asignatura +
                      "\n\n**Nombre del evento eliminado:** " +
                      texto.content
                  )
                  .setColor("#00FF00")
                  .setThumbnail(
                    "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                  );
                let contenido1 = texto.content;

                let obtener = await eventos.obtener(
                  "1ºDAW.sistemasinformaticos"
                );
                obtener.map(async v => {
                  if (v.nombre.toLowerCase() == contenido1.toLowerCase()) {
                    eventos.extract("1ºDAW.sistemasinformaticos", v);
                  } else {
                    a = "pito"
                    return message.channel.send(embederr);
                  }
                });
              if(a=="pito")return;
                message.channel.send(finembed);
              });
          } else if (reaccion.emoji.name === "📑") {
            mesg.delete();
            asignatura = "📑 Lenguajes de Marcas";
            let msg = await message.channel.send(embedd);
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
                let texto = col.first();

                let finembed = new Discord.MessageEmbed()
                  .setTitle("ELIMINACIÓN FINALIZADA ✅")
                  .setDescription(
                    "**Asignatura seleccionada**: " +
                      asignatura +
                      "\n\n**Nombre del evento eliminado:** " +
                      texto.content
                  )
                  .setColor("#00FF00")
                  .setThumbnail(
                    "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                  );
                let contenido1 = texto.content;

                let obtener = await eventos.obtener("1ºDAW.lenguajesdemarcas");
                obtener.map(async v => {
                  if (v.nombre.toLowerCase() == contenido1.toLowerCase()) {
                    eventos.extract("1ºDAW.lenguajesdemarcas", v);
                  } else {
                    a = "pito"
                    return message.channel.send(embederr);
                    
                  }
                });
              if(a=="pito")return;
                message.channel.send(finembed);
              });
          } else if (reaccion.emoji.name === "📟") {
            mesg.delete();
            asignatura = "📟 Entornos de Desarrollo";
            let msg = await message.channel.send(embedd);
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
                let texto = col.first();

                let finembed = new Discord.MessageEmbed()
                  .setTitle("ELIMINACIÓN FINALIZADA ✅")
                  .setDescription(
                    "**Asignatura seleccionada**: " +
                      asignatura +
                      "\n\n**Nombre del evento eliminado:** " +
                      texto.content
                  )
                  .setColor("#00FF00")
                  .setThumbnail(
                    "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                  );
                let contenido1 = texto.content;

                let obtener = await eventos.obtener(
                  "1ºDAW.entornosdedesarrollo"
                );
                obtener.map(async v => {
                  if (v.nombre.toLowerCase() == contenido1.toLowerCase()) {
                    eventos.extract("1ºDAW.entornosdedesarrollo", v);
                  } else {
                    a = "pito"
                    return message.channel.send(embederr);
               
                  }
                });
              if(a=="pito")return;
                message.channel.send(finembed);
              });
          } else if (reaccion.emoji.name === "💰") {
            mesg.delete();
            asignatura = "💰 F.O.L.";
            let msg = await message.channel.send(embedd);
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
                let texto = col.first();

                let finembed = new Discord.MessageEmbed()
                  .setTitle("ELIMINACIÓN FINALIZADA ✅")
                  .setDescription(
                    "**Asignatura seleccionada**: " +
                      asignatura +
                      "\n\n**Nombre del evento eliminado:** " +
                      texto.content
                  )
                  .setColor("#00FF00")
                  .setThumbnail(
                    "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                  );
                let contenido1 = texto.content;

                let obtener = await eventos.obtener("1ºDAW.fol");
                obtener.map(async v => {
                  if (v.nombre.toLowerCase() == contenido1.toLowerCase()) {
                    eventos.extract("1ºDAW.fol", v);
                  } else {
                    a = "pito"
                    return message.channel.send(embederr);
                  }
                });
              if(a=="pito")return;
                message.channel.send(finembed);
              });
          } else if (reaccion.emoji.name === "💂") {
            mesg.delete();
            asignatura = "💂 Inglés";
            let msg = await message.channel.send(embedd);
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
                let texto = col.first();

                let finembed = new Discord.MessageEmbed()
                  .setTitle("ELIMINACIÓN FINALIZADA ✅")
                  .setDescription(
                    "**Asignatura seleccionada**: " +
                      asignatura +
                      "\n\n**Nombre del evento eliminado:** " +
                      texto.content
                  )
                  .setColor("#00FF00")
                  .setThumbnail(
                    "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                  );
                let contenido1 = texto.content;

                let obtener = await eventos.obtener("1ºDAW.ingles");
                obtener.map(async v => {
                  if (v.nombre.toLowerCase() == contenido1.toLowerCase()) {
                    eventos.extract("1ºDAW.ingles", v);
                  } else {
                    a = "pito"
                    return message.channel.send(embederr);
                  }
                });
              if(a=="pito")return;
                message.channel.send(finembed);
              });
          } else if (reaccion.emoji.name === "🔗") {
            mesg.delete();
            asignatura = "🔗 Otros";
            let msg = await message.channel.send(embedd);
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
                let texto = col.first();

                let finembed = new Discord.MessageEmbed()
                  .setTitle("ELIMINACIÓN FINALIZADA ✅")
                  .setDescription(
                    "**Asignatura seleccionada**: " +
                      asignatura +
                      "\n\n**Nombre del evento eliminado:** " +
                      texto.content
                  )
                  .setColor("#00FF00")
                  .setThumbnail(
                    "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                  );
                let contenido1 = texto.content;

                let obtener = await eventos.obtener("1ºDAW.otros");
                obtener.map(async v => {
                  if (v.nombre.toLowerCase() == contenido1.toLowerCase()) {
                    eventos.extract("1ºDAW.otros", v);
                  } else {
                    a = "pito"
                    return message.channel.send(embederr);
                  }
                });
              if(a=="pito")return;
                message.channel.send(finembed);
              });
          } else if (reaccion.emoji.name === "🗑") {
            mesg.delete();
          }
        });
    }
  }
};

function compare(a, b) {
  const bandA = a.unix;
  const bandB = b.unix;

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}
