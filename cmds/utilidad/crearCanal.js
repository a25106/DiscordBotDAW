const Discord = require("discord.js");


module.exports = {
  config: {
    nombre: "crear",
    alias: ["create"]
  },
  run: async (client, message, args) => {
    var categoriaID;
    var categoriaNombre;
    const filtro = m => m.author.id === message.author.id;
    const categoriaVoz = "892357493114667021";
    const categoriaTexto = "892357493114667020";
    global.tiempo = false;
    let embed1 = new Discord.MessageEmbed()
      .setTitle("Creación de Canal")
      .setColor("RANDOM")
      .setThumbnail(
        "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
      )
      .setDescription(
        "**Elige un tipo de canal:**\n\n💬 → Canal de Texto\n\n📢 → Canal de Voz"
      )
      .setFooter("Si quieres cancelar la sugerencia, reacciona a la papelera");

    let mesg = await message.channel.send(embed1);
    await mesg.react("💬");
    await mesg.react("📢");
    await mesg.react("🗑");
    const filter = (reaction, user) =>
      ["💬", "📢", "🗑"].includes(reaction.emoji.name) &&
      user.id == message.member.id &&
      user.id !== client.user.id;
    mesg
      .awaitReactions(filter, {
        max: 1
      })
      .then(async collected => {
        const reaction = collected.first();
        mesg.reactions.removeAll();

        mesg.delete();
        if (reaction.emoji.name === "💬") {
          let embed2 = new Discord.MessageEmbed()
            .setTitle("Creación de Canal de Texto 💬")
            .setColor("RANDOM")
            .setThumbnail(
              "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
            )
            .setDescription(
              "**Elige una Asignatura:**\n\n💻 → Programación\n\n📚 → Bases de Datos\n\n📠 → Sistemas Informáticos\n\n📑 → Lenguajes de Marcas\n\n📟 → Entornos de Desarrollo\n\n💰 → F.O.L\n\n💂 → Inglés\n\n🔗 → Otros"
            )
            .setFooter(
              "Si quieres cancelar la sugerencia, reacciona a la papelera"
            );

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
                categoriaID = "892412018827599973";
                categoriaNombre = "💻 PROGRAMACIÓN";
              } else if (reaccion.emoji.name === "📚") {
                categoriaID = "892412041590099979";
                categoriaNombre = "📚 BASES DE DATOS";
              } else if (reaccion.emoji.name === "📠") {
                categoriaID = "892412269642788874";
                categoriaNombre = "📠 SISTEMAS INFORMÁTICOS";
              } else if (reaccion.emoji.name === "📑") {
                categoriaID = "892412184930435082";
                categoriaNombre = "📑 LENGUAJES DE MARCAS";
              } else if (reaccion.emoji.name === "📟") {
                categoriaID = "892412154005835797";
                categoriaNombre = "📟 ENTORNOS DE DESARROLLO";
              } else if (reaccion.emoji.name === "💰") {
                categoriaID = "892412079556935760";
                categoriaNombre = "💰 F.O.L.";
              } else if (reaccion.emoji.name === "💂") {
                categoriaID = "892411983800979476";
                categoriaNombre = "💂 INGLÉS";
              } else if (reaccion.emoji.name === "🔗") {
                categoriaID = "892438695758663760";
                categoriaNombre = "🔗 OTROS";
              } else if (reaccion.emoji.name === "🗑") {
                categoriaID = "Fin";
                categoriaNombre = "Fin";
              }
            })
            .then(async () => {
              mesg.delete();
              if (categoriaID == "Fin" && categoriaNombre == "Fin") return;
              let embed = new Discord.MessageEmbed()
                .setTitle("Creación de Canal de Texto 💬")
                .setDescription("**Escribe el nombre del canal:**")
                .setColor("#ffff00")
                .setThumbnail(
                  "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                )
                .setFooter(
                  "Si quieres parar el proceso, reacciona a la papelera"
                );

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
                  let nombre = col.first();
                  let canal = await message.guild.channels.create(
                    nombre.content,
                    {
                      type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
                      permissionOverwrites: [
                        {
                          id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
                          deny: ["VIEW_CHANNEL"] //Deny permissions
                        },
                        {
                          id: message.author.id,
                          allow: [
                            "MANAGE_CHANNELS",
                            "VIEW_CHANNEL",
                            "MANAGE_ROLES"
                          ]
                        },
   //                     {
  //                        id: "892748757207228497",
  //                        allow: ["VIEW_CHANNEL"]
 //                       }
                      ],
                      parent: categoriaID
                    }
                  );

                  let finembed = new Discord.MessageEmbed()
                    .setTitle("CREACIÓN FINALIZADA ✅")
                    .setDescription(
                      "**Tipo de canal**: Texto 💬\n\n**Asignatura asignada**: " +
                        categoriaNombre +
                        "\n\n**Nombre del canal:** " +
                        nombre.content +
                        "\n\nActualmente eres el propietario del canal <#" +
                        canal.id +
                        ">."
                    )
                    .setColor("#00FF00")
                    .setThumbnail(
                      "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                    );
                  message.channel.send(finembed);
                });
            });
        } else if (reaction.emoji.name === "📢") {
          let embed2 = new Discord.MessageEmbed()
            .setTitle("Creación de Canal de Voz 📢")
            .setColor("RANDOM")
            .setThumbnail(
              "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
            )
            .setDescription(
              "**Elige una Asignatura:**\n\n💻 → Programación\n\n📚 → Bases de Datos\n\n📠 → Sistemas Informáticos\n\n📑 → Lenguajes de Marcas\n\n📟 → Entornos de Desarrollo\n\n💰 → F.O.L\n\n💂 → Inglés\n\n🔗 → Otros"
            )
            .setFooter(
              "Si quieres cancelar la sugerencia, reacciona a la papelera"
            );

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
                categoriaID = "892412018827599973";
                categoriaNombre = "💻 PROGRAMACIÓN";
              } else if (reaccion.emoji.name === "📚") {
                categoriaID = "892412041590099979";
                categoriaNombre = "📚 BASES DE DATOS";
              } else if (reaccion.emoji.name === "📠") {
                categoriaID = "892412269642788874";
                categoriaNombre = "📠 SISTEMAS INFORMÁTICOS";
              } else if (reaccion.emoji.name === "📑") {
                categoriaID = "892412184930435082";
                categoriaNombre = "📑 LENGUAJES DE MARCAS";
              } else if (reaccion.emoji.name === "📟") {
                categoriaID = "892412154005835797";
                categoriaNombre = "📟 ENTORNOS DE DESARROLLO";
              } else if (reaccion.emoji.name === "💰") {
                categoriaID = "892412079556935760";
                categoriaNombre = "💰 F.O.L.";
              } else if (reaccion.emoji.name === "💂") {
                categoriaID = "892411983800979476";
                categoriaNombre = "💂 INGLÉS";
              } else if (reaccion.emoji.name === "🔗") {
                categoriaID = "892438695758663760";
                categoriaNombre = "🔗 OTROS";
              } else if (reaccion.emoji.name === "🗑") {
                categoriaID = "Fin";
                categoriaNombre = "Fin";
              }
            })
            .then(async () => {
              mesg.delete();
              if (categoriaID == "Fin" && categoriaNombre == "Fin") return;
              let embed = new Discord.MessageEmbed()
                .setTitle("Creación de Canal de Voz 📢")
                .setDescription("**Escribe el nombre del canal:**")
                .setColor("#ffff00")
                .setThumbnail(
                  "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                )
                .setFooter(
                  "Si quieres parar el proceso, reacciona a la papelera"
                );

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
                  let nombre = col.first();

                  let canal = await message.guild.channels.create(
                    nombre.content,
                    {
                      type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
                      permissionOverwrites: [
                        {
                          id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
                          deny: ["VIEW_CHANNEL"] //Deny permissions
                        },
                        {
                          id: message.author.id,
                          allow: [
                            "MANAGE_CHANNELS",
                            "VIEW_CHANNEL",
                            "MANAGE_ROLES"
                          ]
                        }
                      ],
                      parent: categoriaID
                    }
                  );

                  let finembed = new Discord.MessageEmbed()
                    .setTitle("CREACIÓN FINALIZADA ✅")
                    .setDescription(
                      "**Tipo de canal**: Voz 📢\n\n**Asignatura asignada**: " +
                        categoriaNombre +
                        "\n\n**Nombre del canal:** " +
                        nombre.content +
                        "\n\nActualmente eres el propietario del canal <#" +
                        canal.id +
                        ">."
                    )
                    .setColor("#00FF00")
                    .setThumbnail(
                      "https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj"
                    );
                  message.channel.send(finembed);
                });
            });
        }
      });
  }
};
